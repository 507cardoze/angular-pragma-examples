import { Component } from '@angular/core';
import { Item } from 'src/app/store/favorite/favorite.type';
import { Subscription } from 'rxjs';
import { FavoriteService } from '@services/favorite/favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
})
export class FavoritePageComponent {
  public favoriteList: Item[] = [];
  public favoriteSubscription$ = new Subscription();

  constructor(private favoriteservice: FavoriteService) {}

  public removeFavorite(track: Item) {
    this.favoriteservice.removeFavorite(track);
  }

  ngOnInit(): void {
    this.favoriteSubscription$ = this.favoriteservice
      .getFavorites()
      .subscribe((favoriteList) => {
        this.favoriteList = favoriteList.tracks;
      });
  }

  ngOnDestroy(): void {
    this.favoriteSubscription$.unsubscribe();
  }
}
