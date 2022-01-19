import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe',
  pure : true
})
export class GenderPipe implements PipeTransform {

  transform(input:string) : string
  {
    let output  = "";

    if( input.toUpperCase() == "M" )  output = "Male";
    if( input == "F" || input == "f" )  output = "Female";

    return output;
  }
}
