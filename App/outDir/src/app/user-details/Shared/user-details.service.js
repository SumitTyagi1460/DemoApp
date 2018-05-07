"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
//import { HttpModule } from '@angular/http';
require("rxjs/add/operator/toPromise");
var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(http) {
        this.http = http;
        this.baseUrl = '../api';
        this.endpoint = '/UserDetails';
    }
    UserDetailsService.prototype.InsertUserDetails = function (UserInfo) {
        debugger;
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        var headers = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + this.endpoint, JSON.stringify(UserInfo), { headers: headers })
            .subscribe(function (res) {
            //const response = res.text();
            console.log((res));
        });
    };
    UserDetailsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserDetailsService);
    return UserDetailsService;
}());
exports.UserDetailsService = UserDetailsService;
//# sourceMappingURL=user-details.service.js.map