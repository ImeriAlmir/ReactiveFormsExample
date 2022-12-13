import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

    private formControls = {
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(7)
        ], []),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ], [])
    };

    public loginForm: FormGroup = new FormGroup(this.formControls);

}
