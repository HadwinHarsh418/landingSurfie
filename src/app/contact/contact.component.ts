import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PacksService } from '../services/packs.service';
import { Patterns } from '../_helpers/patterns';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData!: FormGroup;
  submitted!: boolean;
  loadinTrns: boolean = false;

  constructor
    (
      private fb: FormBuilder,
      private packService: PacksService,
      private toastr: ToastrService

    ) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(Patterns.email)]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

  get f() {
    return this.formData.controls;
  }

  gotoLink(url: any) {
    setTimeout(() => {
      window.open(url, '_parent')
    }, 500);
  }

  submit() {
    console.log(this.formData.value);
    this.submitted = true;
    for (let item of Object.keys(this.f)) {
      this.f[item].markAsDirty()
    }
    if (this.formData.invalid) {
      return;
    }

    this.loadinTrns = true;
    let bodyParams = {
      first_name: this.formData.value.name,
      subject: this.formData.value.subject,
      description: this.formData.value.message,
      email: this.formData.value.email

    }


    this.packService.contactUs(bodyParams).subscribe(response => {
      if (!response['error']) {
        this.toastr.success(response['msg'])
        this.formData.reset()

      }
      else {
        this.toastr.error(response['msg']);
      }
      this.submitted = false;
      this.loadinTrns = false;

    }, error => {
      this.toastr.error('Oops something went wrong');
    });
  }
}
