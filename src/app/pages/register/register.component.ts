import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;

  schools: FormGroup[] = [];

  siblings: FormGroup[] = [];

  partnerParents: FormGroup[] = [];

  children: FormGroup[] = [];

  fatherSiblings: FormGroup[] = [];

  motherSiblings: FormGroup[] = [];

  partnerSiblings: FormGroup[] = [];

  crimes: FormGroup[] = [];

  countries: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fullName: ['', [Validators.required]],
      fullNameEn: ['', [Validators.required]],
      otherName: ['', []],
      otherNameEn: ['', []],
      fatherName: ['', [Validators.required]],
      fatherRace: ['', [Validators.required]],
      fatherReligion: ['', [Validators.required]],
      fatherOccupation: ['', []],
      fatherAddress: ['', []],
      motherName: ['', [Validators.required]],
      motherRace: ['', [Validators.required]],
      motherReligion: ['', [Validators.required]],
      motherOccupation: ['', []],
      motherAddress: ['', []],
      prominentSign: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      placeOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      currentOccupation: ['', [Validators.required]],
      currentAddress: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]],
      nrcNumber: ['', [Validators.required]],
      height: ['', [Validators.required]],
      eyeColor: ['', [Validators.required]],
      hairColor: ['', [Validators.required]],
      race: ['', [Validators.required]],
      religion: ['', [Validators.required]],
      partnerName: ['', []],
      partnerOccupation: ['', []],
      partnerAddress: ['', []],
      reason: ['', []],
      applyCountry: ['', []],
      department: ['', []],
      position: ['', []],
      passportNumber: ['', []],
      issueDate: ['', []],
      returnPlace: ['', []],
      returnDate: ['', []],
      phoneNumber: ['', [Validators.required]],
    });
  }

  addSchool() {
    this.schools.push(
      this.fb.group({
        fromYear: [''],
        toYear: [''],
        fromClass: [''],
        toClass: [''],
        schoolName: [''],
        schoolPlace: [''],
      })
    );
  }

  addSibling() {
    this.siblings.push(
      this.fb.group({
        name: [''],
        relationship: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addPartnerParent() {
    this.partnerParents.push(
      this.fb.group({
        name: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addChild() {
    this.children.push(
      this.fb.group({
        name: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addFatherSibling() {
    this.fatherSiblings.push(
      this.fb.group({
        name: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addMotherSibling() {
    this.motherSiblings.push(
      this.fb.group({
        name: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addPartherSibling() {
    this.partnerSiblings.push(
      this.fb.group({
        name: [''],
        occupation: [''],
        address: [''],
      })
    );
  }

  addCrime() {
    this.crimes.push(
      this.fb.group({
        poteMa: [''],
        pyitDan: [''],
        taYarYone: [''],
        fromDate: [''],
        toDate: [''],
        prision: [''],
      })
    );
  }

  addCountry() {
    this.countries.push(
      this.fb.group({
        fromYear: [''],
        toYear: [''],
        reason: [''],
        country: [''],
        remark: [''],
      })
    );
  }
}
