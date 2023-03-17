import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { cloneDeep } from 'lodash';
import * as moment from 'moment';

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

  isSubmitted = false;

  date = moment().add(7, 'day').format('DD-MM-yyyy');

  qrCode = '';

  @ViewChild('confirmModal') confirmModal!: TemplateRef<any>;

  private _modal!: MatDialogRef<any>;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

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

  submit() {
    this._modal = this.dialog.open(this.confirmModal, {
      width: '100%',
      maxWidth: '420px',
    });
  }

  confirmSubmit() {
    this._modal.close();
    let data = cloneDeep(this.formGroup.value);
    data.schools = this.schools.map((item) => item.value);
    data.siblings = this.siblings.map((item) => item.value);
    data.partnerParents = this.partnerParents.map((item) => item.value);
    data.children = this.children.map((item) => item.value);
    data.fatherSiblings = this.fatherSiblings.map((item) => item.value);
    data.motherSiblings = this.motherSiblings.map((item) => item.value);
    data.partnerSiblings = this.partnerSiblings.map((item) => item.value);
    data.crimes = this.crimes.map((item) => item.value);
    data.countries = this.countries.map((item) => item.value);
    console.log(data);
    this.isSubmitted = true;
    this.qrCode =
      'MWD_' + moment().format('YYYY') + '_' + moment().format('MMDDHHss');
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
