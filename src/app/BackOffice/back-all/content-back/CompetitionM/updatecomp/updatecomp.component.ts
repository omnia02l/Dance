import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Competition } from 'src/app/core/models/Competition';
import { Dancecategory } from 'src/app/core/models/Dancecategory';
import { Dancestyle } from 'src/app/core/models/Dancestyle';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { DancecategoryandstyleService } from 'src/app/core/services/dancecategoryandstyle.service';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class UpdatecompComponent implements OnInit {
  competitionForm!: FormGroup;
  competitionId: number = 0;
  selectedCategoryId: number | undefined = undefined;
  selectedStyleId: number | undefined = undefined;


  danceCategories$!: Observable<Dancecategory[]>;
  danceStyles$!: Observable<Dancestyle[]>;

  constructor(
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService,
    private danceCategoryService: DancecategoryandstyleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadCompetitionDetails();
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

  loadCompetitionDetails(): void {
    this.route.params.subscribe(params => {
      this.competitionId = +params['id'];
      this.competitionService.getCompetitionById(this.competitionId).subscribe(
        (competition: Competition) => {
          // Préremplir les champs avec les détails de la compétition récupérée
          this.competitionForm.patchValue({
            compname: competition.compname,
            startdate: competition.startdate,
            enddate: competition.enddate,
            cdescreption: competition.cdescreption,
            nbdancers: competition.nbdancers,
            regisdeadline: competition.regisdeadline,
            feesperparticipant: competition.feesperparticipant,
            ageg: competition.ageg,
            compimage: competition.compimage
          });

          // Charger les catégories de danse
          this.selectedCategoryId = competition.dancecateg ? competition.dancecateg.idcategd : 0;
          this.loadDanceStyles(this.selectedCategoryId!);

       
        },
        error => {
          console.error('Error fetching competition details:', error);
        }
      );
    });
  }




  loadDanceCategories(): void {
    this.danceCategories$ = this.danceCategoryService.getAllDancecategories();
  }

  loadDanceStyles(categoryId: number): void {
    this.danceCategoryService.getStylesByCategoryId(categoryId).subscribe(
      (styles: Dancestyle[]) => {
        this.danceStyles$ = of(styles); // Mettre à jour les styles de danse observables
      },
      error => {
        console.error('Erreur lors de la récupération des styles de danse :', error);
      }
    );
  }

  onCategorySelected(event: any): void {
    console.log('Catégorie sélectionnée :', event.target.value);
    const categoryId = Number(event.target.value);
    if (!isNaN(categoryId) && categoryId !== null && categoryId !== undefined) {
      this.selectedCategoryId = categoryId;
      this.loadDanceStyles(this.selectedCategoryId);
    } else {
      this.selectedCategoryId = 0;
      this.danceStyles$ = of([]); // Vide la liste des styles
    }
  }

  onStyleSelected(event: any): void {
    const styleId = Number(event.target.value);
    if (!isNaN(styleId) && styleId !== null && styleId !== undefined) {
      this.selectedStyleId = styleId;
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
        idcomp: this.competitionId, // Ajoutez l'ID de la compétition ici
        dancecateg: this.selectedCategoryId,
        style: this.selectedStyleId
      };

      // Appeler la méthode du service pour mettre à jour la compétition
      this.competitionService.updateCompetitionWithCategoryAndStyle(
        this.competitionId, // Passer l'ID de la compétition à mettre à jour
        competitionData,
        this.selectedCategoryId!,
        this.selectedStyleId!
      ).subscribe(
        (response) => {
          // Gérer le succès
          console.log('Compétition mise à jour avec succès :', response);
        },
        (error) => {
          // Gérer l'erreur
          console.error('Erreur lors de la mise à jour de la compétition :', error);
        }
      );
    } else {
      // Le formulaire est invalide ou la catégorie/style n'a pas été sélectionnée, faire quelque chose (par exemple, afficher un message d'erreur)
      console.log('Le formulaire est invalide ou la catégorie/style n\'a pas été sélectionnée');
    }
  }
}
