import { Component, OnInit } from '@angular/core';
import { WorkersService } from './workers.service';

interface Workers {
  name: string;
  surname: string;
  id: number;
  image: string;
  birthday: string;
  age: number;
  position: string;
  remote: boolean;
  city: string;
  street: string;
  house: string;
  apartment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  workers: Workers[] = [];
  workerName: string = ''; 
  workerSurname: string = '';
  workerBirthday: string = '';
  workerPosition: string = '';
  workerRemote: boolean;
  workerCity:string = '';
  workerStreet: string = '';
  workerHouse: string = ''; 
  workerApartment: string = '';
  selectedWorker;
  searchWorker = '';
  


  constructor(private workersService: WorkersService){}

  clearFields() {
    this.workerName = '';
    this.workerSurname = '';
    this.workerBirthday = '';
    this.workerPosition = '';
    this.workerRemote = false;
    this.workerCity = '';
    this.workerStreet = '';
    this.workerHouse = '';
    this.workerApartment= '';
    
  }
  

  ngOnInit() {
    this.workersService
      .getWorkers()
      .subscribe((workers: Workers[]) => {
        this.workers = workers;
      });
  }

  openClosePopUp() {
    this.clearFields();
    const openPopup = document.querySelector('.popup_container');
    return openPopup.classList.toggle('is-open');
    
  }

  hideChangeBtn() {
    document.getElementById('change').classList.add('change');
    document.getElementById('save').classList.remove('change');
  }

  hideSaveBtn() {
    document.getElementById('save').classList.add('change');
    document.getElementById('change').classList.remove('change');
  }

  addWorker() {
    this.workersService
      .postWorker(this.workerName, this.workerSurname, this.workerBirthday, this.workerPosition,  this.workerRemote, this.workerCity, this.workerStreet, this.workerHouse, this.workerApartment)
      .subscribe ((worker: Workers) => {
        this.workers.push(worker);
      })

    this.openClosePopUp();
    this.clearFields();

  }

  chooseWorker(worker: Workers) {
    this.selectedWorker = worker;
      
  }

  deleteWorker(selectedWorker: Workers) {
    let deleteAnswer = confirm('Удалить этого работника?');
    if(deleteAnswer) {
      this.workersService.deleteWorker(selectedWorker.id)
      .subscribe((data) => {
        this.workers = this.workers.filter(w => w.id != selectedWorker.id)
      }) 
    }
      /*сделать вывод того что человек удален*/
  }

  changeProfile(selectedWorker: Workers) {
    this.openClosePopUp();
    this.workerName = selectedWorker.name;
    this.workerSurname = selectedWorker.surname;
    this.workerPosition = selectedWorker.position;
    this.workerBirthday = selectedWorker.birthday;
    this.workerCity = selectedWorker.city;
    this.workerStreet = selectedWorker.street;
    this.workerHouse = selectedWorker.house;
    this.workerApartment = selectedWorker.apartment;

  }

  changeWorker(selectedWorker: Workers) {
    
    this.workersService.changeWorker(selectedWorker, this.workerName, this.workerSurname, this.workerBirthday, this.workerPosition,  this.workerRemote, this.workerCity, this.workerStreet, this.workerHouse, this.workerApartment)
      .subscribe((data) => {
        
      })

      this.openClosePopUp();
  }


}
