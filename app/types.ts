export interface Country{
    name: {
      official:string;
    };
    region: string;
    capital?: string[];
    population: number;
    flags: {
      png: string;
      alt?:string,
    };
  };
export interface CountryInfo{
  name:{
    official:string;
    nativeName:{
      [a:string]:{
        official:string;
      }
    }
  }
  tld:string[];
  currencies:{
    [b:string]:{
      name:string;
    }
  }
  capital:string[];
  region:string;
  subregion:[];
  languages:{
    [c:string]:string;
  }
  borders?:string[];
  population:number;
  flags:{
    png:string;
    alt:string;
  }
}