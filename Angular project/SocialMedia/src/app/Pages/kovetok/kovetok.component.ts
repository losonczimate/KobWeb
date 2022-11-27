import {Component, OnChanges, OnInit} from '@angular/core';
import {Felhasznalo} from "../../Model/Felhasznalo";
import {AuthService} from "../../Shared/services/auth.service";
import {UserService} from "../../Shared/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first, take} from "rxjs";
import { Notification } from '../../Model/notification';
import { NotificationsService } from '../../Shared/services/notifications.service';

@Component({
  selector: 'app-kovetok',
  templateUrl: './kovetok.component.html',
  styleUrls: ['./kovetok.component.scss']
})



export class KovetokComponent implements OnInit {

  users: Set<Felhasznalo> = new Set<Felhasznalo>();
  ismerosok: Set<string> = new Set<string>();
  currentloggeduser: Felhasznalo;
  searched: string = '';


  constructor(private authService: AuthService, private notificationService: NotificationsService,private userService: UserService, private router: Router,private actRoute: ActivatedRoute) { }

  kikovetes(ToBeRemovedUserId: string){

    this.ismerosok.delete(ToBeRemovedUserId);

    const UpdatedUser: Felhasznalo = {
      id: this.currentloggeduser.id as string,
      email: this.currentloggeduser.email as string,
      nev: this.currentloggeduser.nev as string,
      ismerosok: Array.from(this.ismerosok.values()),
      regdatum: this.currentloggeduser.regdatum,
      profileimageURL : this.currentloggeduser.profileimageURL,
      telefonszam: this.currentloggeduser.telefonszam,
      role: this.currentloggeduser.role
    }

    this.userService.updateUser(UpdatedUser).then( () =>{
      console.log(UpdatedUser);

      //location.reload()
    });


  }


  bekovetes(ToBeAddedUserId: string){

    this.ismerosok.add(ToBeAddedUserId);

    const UpdatedUser: Felhasznalo = {
      id: this.currentloggeduser.id as string,
      email: this.currentloggeduser.email as string,
      nev: this.currentloggeduser.nev as string,
      ismerosok: Array.from(this.ismerosok.values()),
      regdatum: this.currentloggeduser.regdatum,
      profileimageURL: this.currentloggeduser.profileimageURL,
      telefonszam: this.currentloggeduser.telefonszam,
      role: this.currentloggeduser.role
    }

    this.userService.updateUser(UpdatedUser).then( () =>{
      console.log(UpdatedUser);

      //location.reload()
    });

    const notification: Notification = {
      postId: '',
      notificationId: '',
      type: 1,
      username: '',
      ertesitestKapoUsernameId: ToBeAddedUserId,
      ertesitestAdoUsernameId: '',
      date: new Date(),
      ertesites: undefined
    }
    this.notificationService.create(notification);

  }

  ngOnInit(): void {

    this.actRoute.params.pipe(first()).subscribe((param) => {
      this.searched = param['searched'] as string;
      console.log("searched: " + this.searched);
    });

    this.authService.isUserLoggedIn().pipe(first()).subscribe(curruser =>{
      if(curruser){
        console.log(curruser)
        this.userService.getByID(curruser.uid as string).pipe(first()).subscribe(currentuser =>{
          this.currentloggeduser = currentuser;
          this.ismerosok = new Set(currentuser?.ismerosok as string[]);

          this.users.clear();
          if(this.searched == '' || this.searched == undefined){

          this.ismerosok.forEach(ismerosid =>{
            this.userService.getByID(ismerosid as string).pipe(first()).subscribe(ismerosuser =>{
              this.users.add(ismerosuser);
          })})

          }

          else {

            this.userService.getIfContains(this.searched).then( searchedusers =>{
              searchedusers.forEach(searcheduser =>{
                this.userService.getByID(searcheduser.id as string).pipe(first()).subscribe(user =>{
                  if(user.nev.toLocaleLowerCase().includes(this.searched.toLocaleLowerCase()) || this.searched == ' '){
                  this.users.add(user);}
                })
              })
            })

          }


        });
      } else {
        this.router.navigateByUrl("/login")
      }
    })

  }

  ProfilraIranyit() {
    this.router.navigateByUrl("/profilnezo");
  }
}
