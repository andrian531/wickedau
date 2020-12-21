import { Component } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from './../services/pokemon.service';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegisterPage {
  footer = GlobalConstants.sitefooter;
 
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta) {}


  ngOnInit() {
  }

}
