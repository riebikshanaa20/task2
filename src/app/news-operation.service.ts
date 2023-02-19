import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationService {

  constructor() { 
  let news1:News=new News('stock Market Rises','BusinessNews','the stock market ends with profit today','news.jpg')
    let news2:News=new News('stock Market of Indigo','BusinessNews','the stock market ends with loss today','news.jpg')
    let news3:News=new News('ap CM fases Some issues','Politics','Opposition leader throws many questions to the cm','news.jpg')
    let news4:News=new News('The Murder in Delhi','Crime','an 30 years person was murdered by some people for money','news.jpg')
    let news5:News=new News('Sri Lnaka faces crises','World','sri lanka facing many crises','news.jpg')
    let news6:News=new News('New AI Technology','Technology','The new technology was launched into market AI','news.jpg')
    let news7:News=new News('Dhoni takes Retairment','Sports','Ex-Captain Dhoni takes the break for his career in cricket','news.jpg')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }
}