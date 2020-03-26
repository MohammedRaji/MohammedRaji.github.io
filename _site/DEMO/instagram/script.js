let access_token='IGQVJYcXNDNEQ5OWh5b3F4VkRqTTA1aTlhMU1zMTctNFprRlAxQ253anA4Ul82V08zTG1UQ1FiUldUWkhzelhUZAjUtSUJMbk1JMG94NlFsMUdKQUVnZAjBBaFZALU0d1SU9iWVlSc1ZAveV8tbDhPOTVGOAZDZD';
let  url='https://graph.instagram.com/me/media?fields=media_count,permalink,media_url&access_token='+access_token;


async function instgramfeed(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data);
        var html ='';
        var target = document.querySelector('#instagram')
    
        for(var i=0; i< data.data.length ; i++){
            html +=`<div class="instagram-item">
                        <a href="${data.data[i].permalink}">
                            <img src="${data.data[i].media_url}"/>
                        </a>
                    </div>`
        }
        target.innerHTML=html;
      } catch { // TypeError: failed to fetch
        console.log('Error Loading feeds! Maybe because your access token is wrong, you dont set feeds as full or you have a bad connexion!');
      }
}  

instgramfeed(url);
