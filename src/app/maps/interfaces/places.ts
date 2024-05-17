export interface PlacesResponse {
  type:        string;
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_es:       string;
  place_name_es: string;
  text:          string;
  place_name:    string;
  bbox?:         number[];
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  mapbox_id:        string;
  feature_type:     string;
  full_address:     string;
  name:             string;
  name_preferred:   string;
  coordinates:      Coordinates;
  place_formatted?: string;
  context:          Context;
  bbox?:            number[];
}

export interface Context {
  address?:  Address;
  street?:   Postcode;
  postcode?: Postcode;
  place?:    Place;
  region?:   Region;
  country:   Country;
}

export interface Address {
  mapbox_id:      string;
  address_number: string;
  street_name:    string;
  name:           string;
}

export interface Country {
  mapbox_id:            string;
  name:                 Name;
  wikidata_id:          string;
  country_code:         string;
  country_code_alpha_3: string;
  translations:         Translations;
}

export enum Name {
  Argentina = "Argentina",
  Necochea = "Necochea",
  ProvinciaDeBuenosAires = "Provincia de Buenos Aires",
}

export interface Translations {
  es: Es;
}

export interface Es {
  language: Language;
  name:     Name;
}

export enum Language {
  Es = "es",
}

export interface Place {
  mapbox_id:    string;
  name:         Name;
  wikidata_id:  string;
  translations: Translations;
}

export interface Postcode {
  mapbox_id: string;
  name:      string;
}

export interface Region {
  mapbox_id:         string;
  name:              Name;
  wikidata_id:       string;
  region_code?:      string;
  region_code_full?: string;
  translations:      Translations;
}

export interface Coordinates {
  longitude:        number;
  latitude:         number;
  accuracy?:        string;
  routable_points?: RoutablePoint[];
}

export interface RoutablePoint {
  name:      string;
  latitude:  number;
  longitude: number;
}
