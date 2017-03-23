import {Component, OnInit} from '@angular/core';

import {PoliciesService} from "../policies.service";
import {
  Policies, LoginIdentifierConflict, LoginIdentifiers, AccountOptions, SessionExpiration
} from "../model/policies";
import {ActivatedRoute, Data} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-policie',
  templateUrl: './policie.component.html',
  styleUrls: ['./policie.component.scss'],
  providers: [PoliciesService]
})
export class PolicieComponent implements OnInit {
  private errorMessage: any;
  private policies: Policies = null;
  private loginIdentifierConflict = LoginIdentifierConflict;
  private loginIdentifiers = LoginIdentifiers;
  private sessionExpiration = SessionExpiration;
  private isEditMode: Observable<Data>;


  constructor(private policiesService: PoliciesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any = {})=>{
        this.isEditMode = data.isEditMode;
        this.getPolicies();
      });
  }

  getPolicies(){
    this.policiesService.getPolicies()
      .subscribe((data) => {
          this.policies = <Policies>data;
        },
        error => this.errorMessage = <any>error);
  }

  saveData() {

    let data = <Policies>{
      registration: this.policies.registration,
      gigyaPlugins: this.policies.gigyaPlugins,
      accountOptions: <AccountOptions>{
        verifyEmail: this.policies.accountOptions.verifyEmail,
        verifyProviderEmail: this.policies.accountOptions.verifyProviderEmail,
        allowUnverifiedLogin: this.policies.accountOptions.allowUnverifiedLogin,
        preventLoginIDHarvesting: this.policies.accountOptions.preventLoginIDHarvesting,
        sendWelcomeEmail: this.policies.accountOptions.sendWelcomeEmail,
        sendAccountDeletedEmail: this.policies.accountOptions.sendAccountDeletedEmail,
        defaultLanguage: this.policies.accountOptions.defaultLanguage,
        loginIdentifierConflict: this.policies.accountOptions.loginIdentifierConflict,
        loginIdentifiers: <string>this.policies.accountOptions.loginIdentifiers.join(',')
      },
      passwordComplexity: this.policies.passwordComplexity,
      security: this.policies.security,
      emailVerification: this.policies.emailVerification,
      emailNotifications: this.policies.emailNotifications,
      profilePhoto: this.policies.profilePhoto,
      federation: this.policies.federation,
      twoFactorAuth: this.policies.twoFactorAuth,
      rba: this.policies.rba
    }
  }

}
