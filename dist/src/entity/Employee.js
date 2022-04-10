"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
let Employee = class Employee extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 })
], Employee.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 80 })
], Employee.prototype, "emailid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double" })
], Employee.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 15 })
], Employee.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" })
], Employee.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 500 })
], Employee.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" })
], Employee.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 500 })
], Employee.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean" })
], Employee.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean" })
], Employee.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
], Employee.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
], Employee.prototype, "updated_at", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map