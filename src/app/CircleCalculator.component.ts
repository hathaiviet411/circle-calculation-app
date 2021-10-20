import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class CircleCalculatorComponent {
  circle_radius : number = 0;

  circle_circumference : any = 0;
  circle_area : any = 0;

  circumference_auto_calc: any = 0;
  area_auto_calc : any = 0;

  validateRadius(input: number): boolean {
    if (!input) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmit() :void {
    this.circle_circumference = this.handleSubmitCircumference(this.circle_radius);
    this.circle_area = this.handleSubmitArea(this.circle_radius);
  }

  handleDelete() :void {
    this.circle_circumference = this.circumference_auto_calc = this.circle_radius = 0;
    this.circle_area = this.area_auto_calc = this.circle_radius = 0;
  }

  handleSubmitCircumference(radius: number) :any {
    if (this.validateRadius(radius)) {
      return (2 * Math.PI * radius).toFixed(2);
    } else {
      alert('🚫 Invalid input, radius is required and should be > 0.');
    }
  };

  handleSubmitArea(radius: number) :any {
    return (Math.pow(radius, 2) * Math.PI).toFixed(2);
  };

  handleAutoCal() :void {
    this.circumference_auto_calc = this.handleSubmitCircumference(this.circle_radius);
    this.area_auto_calc = this.handleSubmitArea(this.circle_radius);
  };
};
