export  interface Registration {
  requireCaptcha: boolean,
  requireSecurityQuestion: boolean,
  requireLoginID: boolean,
  enforceCoppa: boolean
}

export  interface GigyaPlugins {
  connectWithoutLoginBehavior: string,
  defaultRegScreenSet: string,
  defaultMobileRegScreenSet: string,
  sessionExpiration: number,
  rememberSessionExpiration: number
}


export  interface AccountOptions {
  verifyEmail: boolean,
  verifyProviderEmail: boolean,
  allowUnverifiedLogin: boolean,
  preventLoginIDHarvesting: boolean,
  sendWelcomeEmail: boolean,
  sendAccountDeletedEmail: boolean,
  defaultLanguage: string,
  loginIdentifierConflict: string,
  loginIdentifiers: any
}

export interface PasswordComplexity {
  minCharGroups: number
  minLength: number
  regExp: string
}

export  interface AccountLockout {
  failedLoginThreshold: number
  lockoutTimeSec: number
  failedLoginResetSec: number
}

export  interface Captcha {
  failedLoginThreshold: number
}

export  interface IpLockout {
  hourlyFailedLoginThreshold: number
  lockoutTimeSec: number
}

export interface Security {
  accountLockout: AccountLockout
  captcha: Captcha
  ipLockout: IpLockout
  passwordChangeInterval: number
  passwordHistorySize: number
}

export  interface EmailTemplates {
  en: string
}

export  interface EmailVerification {
  verificationEmailExpiration: number
  nextURL: string
  autoLogin: boolean
  nextURLMapping: Array<string>
  defaultLanguage: string
  emailTemplates: EmailTemplates
}

export  interface EmailNotifications {
  welcomeEmailTemplates: EmailTemplates
  welcomeEmailDefaultLanguage: string
  accountDeletedEmailDefaultLanguage: string
  confirmationEmailDefaultLanguage: string
}

export  interface PasswordReset {
  requireSecurityCheck: boolean,
  tokenExpiration: number,
  sendConfirmationEmail: boolean,
  defaultLanguage: string,
  emailTemplates: EmailTemplates
}
export  interface ProfilePhoto {
  thumbnailWidth: number
  thumbnailHeight: number
}

export  interface Federation {
  allowMultipleIdentities: boolean
}

export  interface Provider {
  name: string
  enabled: boolean
}

export  interface EmailProvider {
  defaultLanguage: string
  emailTemplates: EmailTemplates
}

export  interface TwoFactorAuth {
  providers: Array<Provider>
  emailProvider: EmailProvider
}

export  interface RiskPolicie {
  name: string
}

export  interface Rba {
  riskPolicies: Array<RiskPolicie>
  defaultPolicy: string
  allowOverride: string
}

export  interface Policies {
  registration: Registration
  gigyaPlugins: GigyaPlugins
  accountOptions: AccountOptions
  passwordComplexity: PasswordComplexity
  passwordReset: PasswordReset
  security: Security
  emailVerification: EmailVerification
  emailNotifications: EmailNotifications
  profilePhoto: ProfilePhoto
  federation: Federation
  twoFactorAuth: TwoFactorAuth
  rba: Rba


}

export const LoginIdentifierConflict = [
  {code: 'ignore', name: "Ignore"},
  {code: 'failOnSiteConflictingIdentity', name: 'Fail on site conflicting identity'},
  {code: 'failOnAnyConflictingIdentity', name: 'Fail on any conflicting identity'}
];
export const LoginIdentifiers = [
  {code: 'email', name: "email"},
  {code: 'username', name: 'username'},
  {code: 'providerEmail', name: 'providerEmail'}
];
export const SessionExpiration = [
  {code: 0, name: "Session expires when the browser closes"},
  {code: -1, name: ' Session ends immediately'},
  {code: -2, name: 'Session is valid forever'}
];
