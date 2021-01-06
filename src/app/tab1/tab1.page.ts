import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {

    // this.authService.userDetails().subscribe(res => {
    //   console.log('res', res);
    //   if (res !== null) {
    //     this.userEmail = res.email;
    //   } else {
    //     this.navCtrl.navigateBack('');
    //   }
    // }, err => {
    //   console.log('err', err);
    // })

  }
  // logout() {
  //   this.authService.logoutUser()
  //     .then(res => {
  //       console.log(res);
  //       this.navCtrl.navigateBack('');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }
  listwiev() {
    document.querySelectorAll(".toggler").forEach(obj=>obj.classList.remove("ibox"))
    document.querySelectorAll(".text-align-to-ibox").forEach(obj=>obj.classList.remove("center"))
    };

  tablewiev() {
      document.querySelectorAll(".toggler").forEach(obj=>obj.classList.add("ibox"))
      document.querySelectorAll(".text-align-to-ibox").forEach(obj=>obj.classList.add("center"))
    };
}
