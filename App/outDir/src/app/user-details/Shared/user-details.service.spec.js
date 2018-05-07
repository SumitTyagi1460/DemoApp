"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_details_service_1 = require("./user-details.service");
describe('UserDetailsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_details_service_1.UserDetailsService]
        });
    });
    it('should be created', testing_1.inject([user_details_service_1.UserDetailsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=user-details.service.spec.js.map