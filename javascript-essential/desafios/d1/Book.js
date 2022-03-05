class Book{
    constructor(
        title,
        author,
        pages,
        price,
        actualPage,
        publishingCompany,
        avaiable,
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
        this.actualPage = actualPage;
        this.publishingCompany = publishingCompany;
        this.avaiable = avaiable;
    }
    pageUP(){
        this.actualPage = this.actualPage + 1;
        console.log(this.title, "actual page is",  this.actualPage)
    }
    pageDOWN(){
        this.actualPage = this.actualPage - 1;
        console.log(this.title, "actual page is",  this.actualPage)
    }
    makeAvaiable(){
        this.avaiable = true;
    }
    notAvaiable(){
        this.avaiable = false;
    }
    discount(){
        if(this.avaiable == false){
            console.log(this.title, "not avaiable!")
        } else{
            this.price = Math.round(this.price*0.8)
        console.log(this.title, "After a 20% discount the actual price is", this.price)
        }
    }
}

export default Book