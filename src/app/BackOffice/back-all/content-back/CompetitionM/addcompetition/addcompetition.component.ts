import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Competition } from 'src/app/core/models/Competition';
import { Dancecategory } from 'src/app/core/models/Dancecategory';
import { Dancestyle } from 'src/app/core/models/Dancestyle';


import { CompetitionService } from 'src/app/core/services/competition.service';
import { DancecategoryandstyleService } from 'src/app/core/services/dancecategoryandstyle.service';

@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.component.html',
  styleUrls: ['./addcompetition.component.css']
})
export class AddcompetitionComponent implements OnInit {
  competitionForm!: FormGroup;
  danceCategories$!: Observable<Dancecategory[]>;
  danceStyles$!: Observable<Dancestyle[]>;
  selectedCategoryId: number = 0; // Valeur par défaut
  selectedStyleId: number = 0; // Valeur par défaut

  constructor(
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService,
    private danceCategoryService: DancecategoryandstyleService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDanceCategories();
  }

  initForm(): void {
    this.competitionForm = this.formBuilder.group({
      compname: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      cdescreption: [''],
      nbdancers: ['', Validators.required],
      dancecateg: ['', Validators.required],
      style: ['', Validators.required],
      regisdeadline: ['', Validators.required],
      feesperparticipant: ['', Validators.required],
      ageg: ['', Validators.required],
      compimage: ['']
    });
  }

  loadDanceCategories(): void {
    this.danceCategories$ = this.danceCategoryService.getAllDancecategories();
  }

  onCategorySelected(event: any): void {
    console.log('Catégorie sélectionnée :', event.target.value);
    const categoryId = event.target.value;
    if (categoryId) {
      this.selectedCategoryId = Number(categoryId);
      this.danceStyles$ = this.danceCategoryService.getStylesByCategoryId(this.selectedCategoryId);
    } else {
      this.selectedCategoryId = 0;
      this.danceStyles$ = of([]); // Vide la liste des styles
    }
  }

  onStyleSelected(event: any): void {
    const styleId = event.target.value;
    if (styleId) {
      this.selectedStyleId = Number(styleId);
      console.log('ID du style sélectionné :', this.selectedStyleId);
    } else {
      this.selectedStyleId = 0;
    }
  }


  onSubmit(): void {
    console.log('Formulaire soumis');
    console.log('Valeur du formulaire :', this.competitionForm.value);
    console.log('ID de la catégorie sélectionnée :', this.selectedCategoryId);
    console.log('ID du style sélectionné :', this.selectedStyleId);

    // Afficher l'état de chaque contrôle
    console.log('Validité du formulaire :', this.competitionForm.valid);
    console.log('Validité du contrôle de catégorie :', this.competitionForm.controls['dancecateg'].valid);
    console.log('Validité du contrôle de style :', this.competitionForm.controls['style'].valid);

    if (this.competitionForm.valid && this.selectedCategoryId !== 0 && this.selectedStyleId !== 0) {
      const competitionData: Competition = {
        ...this.competitionForm.value,
        dancecateg: this.selectedCategoryId,
        style: this.selectedStyleId
      };

      // Appeler la méthode du service pour ajouter la compétition
      this.competitionService.addCompetitionWithCategoryAndStyle(competitionData, this.selectedCategoryId, this.selectedStyleId).subscribe(
        (response) => {
          // Gérer le succès
          console.log('Compétition ajoutée avec succès :', response);
        },
        (error) => {
          // Gérer l'erreur
          console.error('Erreur lors de l\'ajout de la compétition :', error);
        }
      );
    } else {
      // Le formulaire est invalide ou la catégorie/style n'a pas été sélectionné, faire quelque chose (par exemple, afficher un message d'erreur)
      console.log('Le formulaire est invalide ou la catégorie/style n\'a pas été sélectionnée');
    }
  }
}
