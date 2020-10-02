(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <input type=\"text\" placeholder=\"поиск\" [(ngModel)]=\"searchWorker\">\n  \n  <button class=\"open-btn\"  (click)=\"openClosePopUp()\" (click)=\"hideChangeBtn()\">Добавить</button>\n  <button (click)=\"changeProfile(selectedWorker)\" (click)=\"hideSaveBtn()\">Редактировать</button>\n  <button (click)=\"deleteWorker(selectedWorker)\">Удалить</button>\n  <div class=\"grid\" >\n    <div class=\"headline\">\n      <!-- <div class=\"headline-item image\">Превью</div> -->\n      <div class=\"headline-item name\">Имя</div>\n      <div class=\"headline-item surname\">Фамилия</div>\n      <div class=\"headline-item birthday\">Дата рождения</div>\n      <div class=\"headline-item age\">Возраст</div>\n      <div class=\"headline-item position\">Должность</div>\n      <div class=\"headline-item remote\">Удаленная работа</div>\n      <div class=\"headline-item adress\">Адрес проживания</div>\n    </div>\n    <div class=\"person-card\" >\n      <div class=\"person\" *ngFor=\"let worker of workers | workerFilter: searchWorker\" (click)=\"chooseWorker(worker)\">\n        <div class=\"person-item image\">{{worker.image}}</div>\n        <div class=\"person-item name\">{{worker.name}}</div>\n        <div class=\"person-item surname\">{{worker.surname}}</div>\n        <div class=\"person-item birthday\">{{worker.birthday}}</div>\n        <div class=\"person-item age\">{{worker.age}}</div>\n        <div class=\"person-item position\">{{worker.position}}</div>\n        <div class=\"person-item remote\">\n          <input type=\"checkbox\" name=\"myInput\" class=\"remoteInput\" disabled [checked]=\"worker.remote\">\n        </div>\n        <div class=\"person-item adress\">{{worker.city}} {{worker.street}} {{worker.house}}  кв. {{worker.apartment}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!--Модальное окно-->\n<div class=\"popup_container\">\n  <div class=\"person-list-container list-container\">\n    <div class=\"person-list-header\">\n      <h3>Добавление/Редактирование</h3>\n      <button class=\"close-btn\" (click)=\"openClosePopUp()\">&times;</button>\n    </div>\n    <div class=\"person-list-main\">\n      <div class=\"photo\">\n        <div class=\"photo-img\"></div>\n      </div>\n      <div class=\"main-form\">\n        <form>\n          <fieldset>\n            <input type=\"text\" placeholder=\"Имя\" name=\"name\" [(ngModel)]=\"workerName\">\n            <input type=\"text\" placeholder=\"Фамилия\" name=\"surname\" [(ngModel)]=\"workerSurname\">\n            <!--<input type=\"text\" placeholder=\"Дата рождения\" id=\"hide_input\" >-->\n            <input type=\"date\" name=\"birthday\" id=\"show_input\" class=\"chang\" [(ngModel)]=\"workerBirthday\">\n            <select onchange=\"this.setAttribute('data-selected', true)\" name=\"position\" [(ngModel)]=\"workerPosition\">\n              <option disabled selected hidden>Должность</option>\n              <option>Frontend-разработчик</option>\n              <option>Backend-разработчик</option>\n              <option>QA-инженер</option>\n              <option>HR-специалист</option>\n              <option>Бухгалтер</option>\n              <option>Разработчик С++</option>\n              <option>Web-дизайнер</option>\n              <option>Технический писатель</option>\n            </select>\n            <input type=\"checkbox\" name=\"remote\" class=\"remote\" [(ngModel)]=\"workerRemote\">\n          </fieldset>\n          \n          <fieldset>\n            <input type=\"text\" name=\"city\" placeholder=\"Город\" [(ngModel)]=\"workerCity\">\n            <input type=\"text\" name=\"street\" placeholder=\"Улица\" [(ngModel)]=\"workerStreet\">\n            <input type=\"text\" name=\"house\" placeholder=\"Дом\" [(ngModel)]=\"workerHouse\">\n            <input type=\"text\" name=\"apartment\" placeholder=\"Квартира\" [(ngModel)]=\"workerApartment\">\n          </fieldset>\n          \n        </form>\n      </div>\n    </div>\n\n    <div class=\"person-list-footer\">\n      <button id=\"save\" (click)=\"addWorker()\">Добавить</button>\n      <button id=\"change\" (click)=\"changeWorker(selectedWorker)\">Сохранить изменения</button>\n      <button (click)=\"openClosePopUp()\">Отмена</button>\n    </div>\n    \n  </div>\n</div>\n\n<div style=\"width: 100%; height: 105px;\">\n  <div style=\"width: 100px; height: 100px; float: left; margin-right: 35px; border: 1px solid black; text-align: center; background-color: #0d1e30; font-size: 20px; \n  color: white;\">\n    1 - #0d1e30</div>\n  <div style=\"width: 100px; height: 100px; float: left; margin-right: 35px; border: 1px solid black; text-align: center; background-color: #2f455d; font-size: 20px; \n  color: white;\">\n    2 - #2f455d</div>\n  <div style=\"width: 100px; height: 100px; float: left; margin-right: 35px; border: 1px solid black; text-align: center; background-color: #717b7d; font-size: 20px; \n  color: white;\">\n    3 - #717b7d</div>\n  <div style=\"width: 100px; height: 100px; float: left; margin-right: 35px; border: 1px solid black; text-align: center; background-color: #bbbbb3; font-size: 20px;\">\n    4 - #bbbbb3</div>\n  <div style=\"width: 100px; height: 100px; float: left; margin-right: 35px; border: 1px solid black; text-align: center; background-color: #f2f1ec; font-size: 20px;\">\n    5 - #f2f1ec</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.container {\r\n    width: 90%;\r\n    max-width: 1170px;\r\n    margin: auto;\r\n}\r\n/*--- Модальное окно ---*/\r\n.popup_container {\r\n\tposition: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n\tdisplay: none;\r\n    z-index: 999;\r\n    justify-content: flex-end;\r\n}\r\n.is-open {\r\n    display: flex;\r\n}\r\n.person-list-container {\r\n\tmax-width: 780px;\r\n    width: 95%;\r\n    background: #f2f1ec;\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    border: 3px solid #717b7d;\r\n}\r\n.list-container {\r\n    width: auto;\r\n    position: relative;\r\n}\r\n.person-list-header {\r\n\tbackground-color: #2f455d;\r\n\tcolor: #f2f1ec;\r\n\twidth: 100%;\r\n    height: 45px;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\t\r\n}\r\n.person-list-header h3 {\r\n\twidth: 90%; \r\n\tfont-family: 'century gothic', arial, sans-serif;\r\n\tfont-size: 20px;\r\n\tletter-spacing: 1px;\r\n\tpadding: 7px 0 0 15px;\r\n}\r\n.close-btn {\r\n\tfont-size: 36px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    color: white;\r\n}\r\n.close-btn:hover {\r\n    font-size: 38px;\r\n}\r\n.person-list-main {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n}\r\n.photo {\r\n\tmin-width: 200px;\r\n\tmin-height: 200px;\r\n}\r\n.photo-img {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tborder: 1px solid #717b7d;\r\n\tmargin: 15% auto;\r\n}\r\ninput, select {\r\n\twidth: 145px;\r\n\theight: 30px;\r\n\tmargin: 7px;\r\n}\r\n/*Сделать слово должность серым цветом как placeholder*/\r\nselect {\r\n    color: gray;\r\n    width: 148px;\r\n    height: 34px;\r\n}\r\n[data-selected] {\r\n    color: black;\r\n}\r\noption {\r\n    color: black;\r\n}\r\n/*убрать стрелки с input с типом number*/\r\ninput[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"date\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\n.change {\r\n    display: none;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\nform {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\nfieldset {\r\n    width: 50%;\r\n    border: none;\r\n}\r\n/*--- Конец модальнго окна ---*/\r\n/*--- grid ---*/\r\n.grid {\r\n    display: grid;\r\n}\r\n.headline, .person {\r\n    display: inline-grid;\r\n    width: 100%;\r\n    grid-template-columns: repeat(8, 1fr);\r\n}\r\n.headline-item, .person-item {\r\n    width: 15%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQSx5QkFBeUI7QUFDekI7Q0FDQyxlQUFlO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtDQUNqQyxhQUFhO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0NBQ0MsZ0JBQWdCO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxXQUFXO0lBQ1IsWUFBWTtDQUNmLGFBQWE7Q0FDYixtQkFBbUI7O0FBRXBCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsZ0RBQWdEO0NBQ2hELGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUlBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFFQSx1REFBdUQ7QUFDdkQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQSx3Q0FBd0M7QUFDeEM7OztJQUdJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUEsK0JBQStCO0FBRy9CLGVBQWU7QUFFZjtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qLS0tINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviAtLS0qL1xyXG4ucG9wdXBfY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5pcy1vcGVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wZXJzb24tbGlzdC1jb250YWluZXIge1xyXG5cdG1heC13aWR0aDogNzgwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjFlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3MTdiN2Q7XHJcbn1cclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBlcnNvbi1saXN0LWhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJmNDU1ZDtcclxuXHRjb2xvcjogI2YyZjFlYztcclxuXHR3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHJcbn1cclxuLnBlcnNvbi1saXN0LWhlYWRlciBoMyB7XHJcblx0d2lkdGg6IDkwJTsgXHJcblx0Zm9udC1mYW1pbHk6ICdjZW50dXJ5IGdvdGhpYycsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdHBhZGRpbmc6IDdweCAwIDAgMTVweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuXHJcblxyXG4ucGVyc29uLWxpc3QtbWFpbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBob3RvIHtcclxuXHRtaW4td2lkdGg6IDIwMHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucGhvdG8taW1nIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNzE3YjdkO1xyXG5cdG1hcmdpbjogMTUlIGF1dG87XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3Qge1xyXG5cdHdpZHRoOiAxNDVweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi8q0KHQtNC10LvQsNGC0Ywg0YHQu9C+0LLQviDQtNC+0LvQttC90L7RgdGC0Ywg0YHQtdGA0YvQvCDRhtCy0LXRgtC+0Lwg0LrQsNC6IHBsYWNlaG9sZGVyKi9cclxuc2VsZWN0IHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgd2lkdGg6IDE0OHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbltkYXRhLXNlbGVjdGVkXSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxub3B0aW9uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyrRg9Cx0YDQsNGC0Ywg0YHRgtGA0LXQu9C60Lgg0YEgaW5wdXQg0YEg0YLQuNC/0L7QvCBudW1iZXIqL1xyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGFuZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmZpZWxkc2V0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qLS0tINCa0L7QvdC10YYg0LzQvtC00LDQu9GM0L3Qs9C+INC+0LrQvdCwIC0tLSovXHJcblxyXG5cclxuLyotLS0gZ3JpZCAtLS0qL1xyXG5cclxuLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmhlYWRsaW5lLCAucGVyc29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xyXG59XHJcblxyXG4uaGVhZGxpbmUtaXRlbSwgLnBlcnNvbi1pdGVtIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workers.service */ "./src/app/workers.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(workersService) {
        this.workersService = workersService;
        this.workers = [];
        this.workerName = '';
        this.workerSurname = '';
        this.workerBirthday = '';
        this.workerPosition = '';
        this.workerCity = '';
        this.workerStreet = '';
        this.workerHouse = '';
        this.workerApartment = '';
        this.searchWorker = '';
    }
    AppComponent.prototype.clearFields = function () {
        this.workerName = '';
        this.workerSurname = '';
        this.workerBirthday = '';
        this.workerPosition = '';
        this.workerRemote = false;
        this.workerCity = '';
        this.workerStreet = '';
        this.workerHouse = '';
        this.workerApartment = '';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workersService
            .getWorkers()
            .subscribe(function (workers) {
            _this.workers = workers;
        });
    };
    AppComponent.prototype.openClosePopUp = function () {
        this.clearFields();
        var openPopup = document.querySelector('.popup_container');
        return openPopup.classList.toggle('is-open');
    };
    AppComponent.prototype.hideChangeBtn = function () {
        document.getElementById('change').classList.add('change');
        document.getElementById('save').classList.remove('change');
    };
    AppComponent.prototype.hideSaveBtn = function () {
        document.getElementById('save').classList.add('change');
        document.getElementById('change').classList.remove('change');
    };
    AppComponent.prototype.addWorker = function () {
        var _this = this;
        this.workersService
            .postWorker(this.workerName, this.workerSurname, this.workerBirthday, this.workerPosition, this.workerRemote, this.workerCity, this.workerStreet, this.workerHouse, this.workerApartment)
            .subscribe(function (worker) {
            _this.workers.push(worker);
        });
        this.openClosePopUp();
        this.clearFields();
    };
    AppComponent.prototype.chooseWorker = function (worker) {
        this.selectedWorker = worker;
    };
    AppComponent.prototype.deleteWorker = function (selectedWorker) {
        var _this = this;
        var deleteAnswer = confirm('Удалить этого работника?');
        if (deleteAnswer) {
            this.workersService.deleteWorker(selectedWorker.id)
                .subscribe(function (data) {
                _this.workers = _this.workers.filter(function (w) { return w.id != selectedWorker.id; });
            });
        }
        /*сделать вывод того что человек удален*/
    };
    AppComponent.prototype.changeProfile = function (selectedWorker) {
        this.openClosePopUp();
        this.workerName = selectedWorker.name;
        this.workerSurname = selectedWorker.surname;
        this.workerPosition = selectedWorker.position;
        this.workerBirthday = selectedWorker.birthday;
        this.workerCity = selectedWorker.city;
        this.workerStreet = selectedWorker.street;
        this.workerHouse = selectedWorker.house;
        this.workerApartment = selectedWorker.apartment;
    };
    AppComponent.prototype.changeWorker = function (selectedWorker) {
        this.workersService.changeWorker(selectedWorker, this.workerName, this.workerSurname, this.workerBirthday, this.workerPosition, this.workerRemote, this.workerCity, this.workerStreet, this.workerHouse, this.workerApartment)
            .subscribe(function (data) {
        });
        this.openClosePopUp();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _workers_service__WEBPACK_IMPORTED_MODULE_2__["WorkersService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _workers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workers.service */ "./src/app/workers.service.ts");
/* harmony import */ var _worker_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worker-filter.pipe */ "./src/app/worker-filter.pipe.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _worker_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["WorkerFilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_workers_service__WEBPACK_IMPORTED_MODULE_6__["WorkersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/worker-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/worker-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: WorkerFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerFilterPipe", function() { return WorkerFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkerFilterPipe = /** @class */ (function () {
    function WorkerFilterPipe() {
    }
    WorkerFilterPipe.prototype.transform = function (Workers, searchStr) {
        if (Workers.length === 0 || searchStr === '') {
            return Workers;
        }
        return Workers.filter(function (worker) {
            var name = worker.name.toLowerCase().includes(searchStr.toLowerCase());
            var surname = worker.surname.toLowerCase().includes(searchStr.toLowerCase());
            var position = worker.position.toLowerCase().includes(searchStr.toLowerCase());
            var city = worker.city.toLowerCase().includes(searchStr.toLowerCase());
            var street = worker.street.toLowerCase().includes(searchStr.toLowerCase());
            return (name + surname + position + city + street);
        });
    };
    WorkerFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'workerFilter'
        })
    ], WorkerFilterPipe);
    return WorkerFilterPipe;
}());



/***/ }),

/***/ "./src/app/workers.service.ts":
/*!************************************!*\
  !*** ./src/app/workers.service.ts ***!
  \************************************/
/*! exports provided: WorkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkersService", function() { return WorkersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WorkersService = /** @class */ (function () {
    function WorkersService(http) {
        this.http = http;
    }
    WorkersService.prototype.getWorkers = function () {
        return this.http.get('http://localhost:3000/workers');
    };
    WorkersService.prototype.postWorker = function (workerName, workerSurname, workerBirthday, workerPosition, workerRemote, workerCity, workerStreet, workerHouse, workerApartment) {
        var data = {
            image: "=)",
            name: workerName,
            surname: workerSurname,
            birthday: workerBirthday,
            age: 23,
            position: workerPosition,
            remote: workerRemote,
            city: workerCity + ' ',
            street: workerStreet + ' ',
            house: workerHouse + ' ',
            apartment: workerApartment
        };
        return this.http.post('http://localhost:3000/workers', data);
    };
    WorkersService.prototype.deleteWorker = function (workerId) {
        return this.http.delete("http://localhost:3000/workers/" + workerId);
    };
    WorkersService.prototype.changeWorker = function (worker, workerName, workerSurname, workerBirthday, workerPosition, workerRemote, workerCity, workerStreet, workerHouse, workerApartment) {
        worker.image = "=)",
            worker.name = workerName,
            worker.surname = workerSurname,
            worker.birthday = workerBirthday,
            worker.position = workerPosition,
            worker.remote = workerRemote,
            worker.city = workerCity + ' ',
            worker.street = workerStreet + ' ',
            worker.house = workerHouse + ' ',
            worker.apartment = workerApartment;
        return this.http.put("http://localhost:3000/workers/" + worker.id, worker);
    };
    WorkersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WorkersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WorkersService);
    return WorkersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Катя\Desktop\workers-base\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map