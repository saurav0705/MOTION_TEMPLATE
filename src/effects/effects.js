export const changeBackgroundColor = () => {
    document.getElementsByTagName('body')[0].classList.remove('animate-background-finite');
    document.getElementsByTagName('body')[0].classList.add('animate-background-infinte');
}

export const removeBackgroundColor = () => {
    document.getElementsByTagName('body')[0].classList.remove('animate-background-infinte');
    document.getElementsByTagName('body')[0].classList.add('animate-background-finite');
}

export const parrallax = {
    'backgroundImage':"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('https://picsum.photos/800')",
    'backgroundAttachment': 'fixed',
  'backgroundPosition': 'center',
  'backgroundRepeat': 'no-repeat',
  'backgroundSize':'cover',
  

}


export const getFormatedDate = (date) => {
    if(date.length === 0){
        return "";
    }
    
    let month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    date = new Date(date);

    return month[date.getMonth()]+" "+date.getFullYear();




}