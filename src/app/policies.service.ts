import {Injectable} from '@angular/core';
import {Response, QueryEncoder}   from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Jsonp, RequestOptions, URLSearchParams} from '@angular/http';

/*URLSearchParams.prototype.clone = function () {
  debugger;
  var clone = new URLSearchParams();
  clone.appendAll(this);
  return clone;
};*/

export class CustomQueryEncoder extends QueryEncoder {
  encodeKey(k: string): string { return customEncoding(k); }

  encodeValue(v: string): string { return customEncoding(v); }
}

function customEncoding(v: string): string {

  return encodeURIComponent(v)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/gi, '$')
    .replace(/%2C/gi, ',')
    .replace(/%3B/gi, ';')
    //.replace(/%2B/gi, '+')
    .replace(/%3D/gi, '=')
    .replace(/%3F/gi, '?')
    .replace(/%2F/gi, '/');
}



const urlParams = new URLSearchParams('', new CustomQueryEncoder());

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PoliciesService {

  private getPoliciesUrl = 'https://accounts.gigya.com/accounts.getPolicies';
  private setPoliciesUrl = 'https://accounts.gigya.com/accounts.setPolicies';


  private options = {
    userkey: 'AJA3Cw9XcJZf',
    secret: '1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq',
    apikey: '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK'
  };

  constructor(private jsonp: Jsonp) {
  }


  private extractData(res: Response) {
    let data = res.json();
    return data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getOptions() {

    let params = new URLSearchParams('', new CustomQueryEncoder());//new URLSearchParams();
    params.set('userkey', this.options.userkey); // the user's search value
    params.set('secret', this.options.secret);
    params.set('apikey', this.options.apikey);
    params.set('format', 'jsonp');
    params.set('callback', 'JSONP_CALLBACK');
    return params;
  }

  setPolicies(): Observable<any> {
    return this.jsonp.get(this.getPoliciesUrl,  {body: this.options})
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPolicies(): Observable<any> {
    return this.jsonp.get(this.getPoliciesUrl, {search: this.getOptions()})
      .map(this.extractData)
      .catch(this.handleError);
  }
}
