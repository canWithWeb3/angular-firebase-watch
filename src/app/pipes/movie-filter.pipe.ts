import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: any[], filterText: any): any[] {
    filterText = filterText.toLowerCase();

    return filterText? movies.filter(m => m.name.toLowerCase().indexOf(filterText) !== -1): movies
  }

}
