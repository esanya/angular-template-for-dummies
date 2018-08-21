import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../domain';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  private routerSubscription: Subscription;
  
  constructor(
    public navigationService: NavigationService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.updateNavigation(this.router.url);
  }

  

  public updateNavigation(url: String ) {
    console.log('updateNavigation: ' + url);
    this.navigationService.getNavigationList().forEach((g) => {
      g.items.forEach((i) => {
        if ('/admin/' + i.routerLink === url) {
          this.navigationService.selectedNavigationItem = i;
        }
      });
    });
    // if not found then set first element as active
    if (this.navigationService.selectedNavigationItem == null) {
      console.log('updateNavigation: URL address not mapped to menu selection. Using default');
      this.navigationService.selectedNavigationItem = this.navigationService.getNavigationList()[0].items[0];
    }
    this.navigationService.updateSelectedNavigationGroup();
  }

  public onClickNavigationItem(navigationItem: NavigationItem) {
    this.navigationService.selectedNavigationItem = navigationItem;
    this.navigationService.updateSelectedNavigationGroup();
  }

  public isSelectedItem(navigationItem: NavigationItem) {
    return navigationItem === this.navigationService.selectedNavigationItem;
  }
  
}
