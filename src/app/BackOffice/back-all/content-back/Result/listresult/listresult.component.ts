import { Component } from '@angular/core';
import {ResultService} from "../../../../../core/services/result.service";
import {Result} from "../../../../../core/models/Result";
import {ResultCommentService} from "../../../../../core/services/result-comment.service";
import {ResultComment} from "../../../../../core/models/ResultComment";

@Component({
  selector: 'app-listresult',
  templateUrl: './listresult.component.html',
  styleUrls: ['./listresult.component.css']
})
export class ListresultComponent {
  results: Result[] = [];
  editingResult?: Result;
  editMode: boolean = false;
  startDate: Date = new Date();
  endDate: Date = new Date();
  displayLikesDislikes = false;
  selectedResultId: number | null = null;

  comments: ResultComment |undefined; // This will hold the comments

  showLikesDislikes(resultId: number): void {
    this.selectedResultId = resultId;
    this.displayLikesDislikes = true;
  }
  constructor(private resultService: ResultService, private res: ResultCommentService) {}

  ngOnInit(): void {
    this.getAllResults();
  }

  loadComments(resultId: number): void {
    this.res.getResultCommentById(resultId).subscribe({
      next: (commentData) => {
        this.comments = commentData;
      },
      error: (err) => {
        console.error('Error fetching comments:', err);
      }
    });
  }

  getAllResults(): void {
    this.resultService.getAllResults().subscribe({
      next: (data) => this.results = data,

      error: (e) => console.error(e)
    });
  }
  editResult(result: Result) {
    this.editingResult = { ...result };
    this.editMode = true;
  }

  updateResult(result: Result) {
    this.resultService.updateResult(result.idResultat).subscribe(
      updatedResult => {
        const index = this.results.findIndex(r => r.idResultat === updatedResult.idResultat);
        this.results[index] = updatedResult;
        this.editMode = false;

        console.log('Result updated successfully!');
      },
      error => {
        console.error('Error updating result', error);
      }
    );
  }
  cancelEdit() {
    this.editingResult = undefined;
    this.editMode = false;
  }
  deleteResult(id: number) {
  this.resultService.deleteResult(id).subscribe(
    () =>
    {
      this.results = this.results.filter(result => result.idResultat !== id);
      console.log('Result deleted successfully!');

    }, error => {
      // Handle errors here, such as showing an error message
      console.error('Error deleting the result', error);
    }
  )
  }
  getResultsBetweenDates(): void {
    this.resultService.getResultsBetweenDates(this.startDate, this.endDate).subscribe({
      next: (data) => this.results = data,
      error: (e) => console.error(e)
    });
  }

  protected readonly performance = performance;

}
