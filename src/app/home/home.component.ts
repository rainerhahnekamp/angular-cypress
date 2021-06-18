import {Component, OnInit} from "@angular/core";

@Component({
  selector: "eternal-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  message = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.message = "You clicked me.";
  }
}
