import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WorkersService {
    constructor(private http: HttpClient) {}

    getWorkers() {
        return this.http.get('http://localhost:3000/workers');
    }

    postWorker(workerName: string, workerSurname: string, workerBirthday: string, workerPosition: string, workerRemote: boolean, workerCity: string, workerStreet: string, workerHouse: string, workerApartment: string) {
        const data = 
        {
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
        }
        
        return this.http.post('http://localhost:3000/workers', data);
    }

    deleteWorker(workerId: any) {
        return this.http.delete(`http://localhost:3000/workers/${workerId}`);
    }

    changeWorker(worker: any, workerName: string, workerSurname: string, workerBirthday: string, workerPosition: string, workerRemote: boolean, workerCity: string, workerStreet: string, workerHouse: string, workerApartment: string) {

            worker.image = "=)",
            worker.name = workerName,
            worker.surname = workerSurname,
            worker.birthday = workerBirthday,
            worker.position = workerPosition,
            worker.remote = workerRemote,
            worker.city = workerCity + ' ',
            worker.street = workerStreet + ' ',
            worker.house = workerHouse + ' ',
            worker.apartment = workerApartment

        return this.http.put(`http://localhost:3000/workers/${worker.id}`, worker)

    }

}