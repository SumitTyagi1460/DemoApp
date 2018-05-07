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
var user_details_service_1 = require("./Shared/user-details.service");
var userdetail_model_1 = require("./Shared/userdetail.model");
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(UserDetailServ) {
        this.UserDetailServ = UserDetailServ;
        this.UserInfo = new userdetail_model_1.Userdetail();
    }
    UserDetailsComponent.prototype.ngOnInit = function () { };
    UserDetailsComponent.prototype.InsertUserDetails = function () {
        //Code to input here
        this.UserDetailServ.InsertUserDetails(this.UserInfo);
    };
    UserDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css'],
            providers: [userdetail_model_1.Userdetail]
        }),
        __metadata("design:paramtypes", [user_details_service_1.UserDetailsService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map