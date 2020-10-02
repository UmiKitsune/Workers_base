import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workerFilter'
})
export class WorkerFilterPipe implements PipeTransform {


  transform(Workers, searchStr: string) {
    if (Workers.length === 0 || searchStr === '') {
      return Workers;
    }

    return Workers.filter(worker =>{
      const name = worker.name.toLowerCase().includes(searchStr.toLowerCase());
      const surname = worker.surname.toLowerCase().includes(searchStr.toLowerCase());
      const position = worker.position.toLowerCase().includes(searchStr.toLowerCase());
      const city = worker.city.toLowerCase().includes(searchStr.toLowerCase());
      const street = worker.street.toLowerCase().includes(searchStr.toLowerCase());
      return (name + surname + position + city + street);
    });
  }


}