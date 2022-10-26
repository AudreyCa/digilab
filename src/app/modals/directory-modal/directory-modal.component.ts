import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-directory-modal',
  templateUrl: './directory-modal.component.html',
  styleUrls: ['./directory-modal.component.scss']
})
export class DirectoryModalComponent implements OnInit {

  directoryForm!: FormGroup;
  // pathPattern = "[a-zA-Z0-9&/?-_.]"

  constructor(private _directoryService: DirectoryService, 
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<any>
    ) { }

  ngOnInit(): void {
    this.directoryForm = this._fb.group({
      name: ["", Validators.required],
      // path:["", [Validators.required, Validators.pattern(this.pathPattern)]],
      path:["", Validators.required],
      description:["", [Validators.required, Validators.minLength(10)]],
    })

  }

  onSubmit() {     
    this._directoryService.postData(this.directoryForm.value)
    .subscribe((responseFromServer:any) =>
    this._dialogRef.close(responseFromServer))
  }

}
