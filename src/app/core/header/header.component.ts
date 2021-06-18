import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  title = "";

  ngOnInit(): void {
    window.setTimeout(() => this.title = "Unforgettable Holidays", 3000)
  }
}
