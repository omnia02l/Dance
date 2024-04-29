import {Component, OnInit} from '@angular/core';
import {VoteService} from "../../../../../core/services/vote.service";
import {Vote} from "../../../../../core/models/Vote";

@Component({
  selector: 'app-list-vote',
  templateUrl: './list-vote.component.html',
  styleUrls: ['./list-vote.component.css']
})
export class ListVoteComponent implements OnInit {

  votes:Vote[] = [] ;
  constructor(private voteService: VoteService ) {}

  ngOnInit(): void {
    this.getVotes();
  }

  getVotes(): void {
    this.voteService.getAllVotes().subscribe({
      next: (data) => this.votes = data,
      error: (e) => console.error(e)
    });
  }

  deleteVote(id: number): void {
    this.voteService.deleteVote(id).subscribe(
      () => {
        this.votes = this.votes.filter(vote => vote.idVote !== id);
        // Optionally, show a success message
      },
      error => {
        console.error('Error deleting vote', error);
        // Optionally, show an error message
      }
    );
  }

}
