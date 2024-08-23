import React, { useState, useEffect } from "react";
import styles from "./CatsListings.module.css"

export default function CatsListings() {
  const [cat1, setCat1] = useState({ 
    img: "", 
    name: "", 
    description: "", 
    origin: "", 
    temperament: "", 
    lifeSpan: "", 
    wiki: "",  
  });
  const [cat2, setCat2] = useState({ 
    img: "", 
    name: "", 
    description: "", 
    origin: "", 
    temperament: "", 
    lifeSpan: "", 
    wiki: "",  
  });
  const [cat3, setCat3] = useState({ 
    img: "", 
    name: "", 
    description: "", 
    origin: "", 
    temperament: "", 
    lifeSpan: "", 
    wiki: "",  
  });
  const [cat4, setCat4] = useState({ 
    img: "", 
    name: "", 
    description: "", 
    origin: "", 
    temperament: "", 
    lifeSpan: "", 
    wiki: "",  
  });
  const fetchCatsData = async () => {
    try {
  const response = await fetch("https://api.freeapi.app/api/v1/public/cats?page=1&limit=4", {
  method: "GET",
  headers: {
    accept: "application/json",
  },
});
if (!response.ok){
  throw new Error("Network reponse is not OK")
}
const result = await response.json();
const responseData = result.data.data;
setCat1({
  img: responseData[0].image,
  name: responseData[0].name,
  description: responseData[0].description,
  origin: responseData[0].origin,
  temperament: responseData[0].temperament.split(','),
  lifeSpan: responseData[0].life_span,
  wiki: responseData[0].wikipedia_url,
}),
setCat2({
  img: responseData[1].image,
  name: responseData[1].name,
  description: responseData[1].description,
  origin: responseData[1].origin,
  temperament: responseData[1].temperament.split(','),
  lifeSpan: responseData[1].life_span,
  wiki: responseData[1].wikipedia_url,
}),
setCat3({
  img: responseData[2].image,
  name: responseData[2].name,
  description: responseData[2].description,
  origin: responseData[2].origin,
  temperament: responseData[2].temperament.split(','),
  lifeSpan: responseData[2].life_span,
  wiki: responseData[2].wikipedia_url,
}),
setCat4({
  img: responseData[3].image,
  name: responseData[3].name,
  description: responseData[3].description,
  origin: responseData[3].origin,
  temperament: responseData[3].temperament.split(','),
  lifeSpan: responseData[3].life_span,
  wiki: responseData[3].wikipedia_url,
})
} catch (error) {
  throw new Error("Error in fetching Data")
}
}
  useEffect(() => {
    fetchCatsData();
    }, []);
   return (
    <>
     <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Cats around us</div>
        <a target="_blank" href="https://chaicode.com" rel="noopener noreferrer">
        <div>
          <img className={styles.chaicode} src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMg1usy2t4CeWkCE5FDxWIKuXrxit95KPPmJg6ImrblHw0EnBFeEkIZsj1DiincxOtuub73n8IgJs~m5eVsqUGW8oOhw3QsXQs5qa8l3y5tNdShktZCAjBI~18EroQc9SczCBZhwXupdy1rWcRVuAtOsshbTJ4s4SMof5y6i~z8afXXKnUdrS~7nngQo9qbMrybIsStHIflTFcADtNTwvFpIF0ib8FnRCXqxc4pp-KsHN7Yc2NwhphUkK~N6jYGf-SaJk2aqDOCJYcTT-no3376Gmpl5p5fb47yEnkGdmCzTVv9nJLJy39X36I6-8CN9ga8q4few8PrdHt6xokoriA__" alt="ChaiCode" />
        </div>
        </a>
      </div>
      <div className={styles.scrolling}>
        <div className={styles.card}>
          <div className={styles.catcontainer}>
            <img
              className={styles.cat}
              src={cat1.img}
              alt="CatImage"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{cat1.name}</div>
            <div className={styles.description}>
              {cat1.description}
            </div>
            <div className={styles.origin}>
              <div className={styles.Otitle}>Origin</div>
              <div className={styles.country}>{cat1.origin}</div>
            </div>
            <div className={styles.temper}>
              <div className={styles.Ttitle}>Temperament</div>
              <div className={styles.tags}>
                <div>{cat1.temperament[0]}</div>
                <div>{cat1.temperament[1]}</div>
                <div>{cat1.temperament[2]}</div>
              </div>
            </div>
            <div className={styles.life}>
              <div className={styles.Ltitle}>Life Span</div>
              <div className={styles.year}>{cat1.lifeSpan} years</div>
            </div>
          </div>
            <a target="_blank" href={cat1.wiki}>
            <div className={styles.more}>Learn More</div>
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.catcontainer}>
            <img
              className={styles.cat}
              src={cat2.img}
              alt=""
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{cat2.name}</div>
            <div className={styles.description}>
            {cat2.description}
            </div>
            <div className={styles.origin}>
              <div className={styles.Otitle}>Origin</div>
              <div className={styles.country}>{cat2.origin}</div>
            </div>
            <div className={styles.temper}>
              <div className={styles.Ttitle}>Temperament</div>
              <div className={styles.tags}>
                <div>{cat2.temperament[0]}</div>
                <div>{cat2.temperament[1]}</div>
                <div>{cat2.temperament[2]}</div>
              </div>
            </div>
            <div className={styles.life}>
              <div className={styles.Ltitle}>Life Span</div>
              <div className={styles.year}>{cat2.lifeSpan} years</div>
            </div>
            </div>
            <a target="_blank" href={cat2.wiki}>
            <div className={styles.more}>Learn More</div>
            </a>          
        </div>
        <div className={styles.card}>
          <div className={styles.catcontainer}>
            <img
              className={styles.cat}
              src={cat3.img}
              alt="CatImage"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{cat3.name}</div>
            <div className={styles.description}>
              {cat3.description}
            </div>
            <div className={styles.origin}>
              <div className={styles.Otitle}>Origin</div>
              <div className={styles.country}>{cat3.origin}</div>
            </div>
            <div className={styles.temper}>
              <div className={styles.Ttitle}>Temperament</div>
              <div className={styles.tags}>
                <div>{cat3.temperament[0]}</div>
                <div>{cat3.temperament[1]}</div>
                <div>{cat3.temperament[2]}</div>
              </div>
            </div>
            <div className={styles.life}>
              <div className={styles.Ltitle}>Life Span</div>
              <div className={styles.year}>{cat3.lifeSpan} years</div>
            </div>
          </div>
            <a href={cat3.wiki} target="_blank" rel="noopener noreferrer">
            <div className={styles.more}>Learn More</div>
            </a>
        </div>
        <div className={styles.card}>
          <div className={styles.catcontainer}>
            <img
              className={styles.cat}
              src={cat4.img}
              alt="CatImage"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{cat4.name}</div>
            <div className={styles.description}>
              {cat4.description}
            </div>
            <div className={styles.origin}>
              <div className={styles.Otitle}>Origin</div>
              <div className={styles.country}>{cat4.origin}</div>
            </div>
            <div className={styles.temper}>
              <div className={styles.Ttitle}>Temperament</div>
              <div className={styles.tags}>
                <div>{cat4.temperament[0]}</div>
                <div>{cat4.temperament[1]}</div>
                <div>{cat4.temperament[2]}</div>
              </div>
            </div>
            <div className={styles.life}>
              <div className={styles.Ltitle}>Life Span</div>
              <div className={styles.year}>{cat4.lifeSpan} years</div>
            </div>
          </div>
            <a href={cat4.wiki} target="_blank" rel="noopener noreferrer">
            <div className={styles.more}>Learn More</div>
            </a>
        </div>
        <div className={styles.card}>
        <div className={styles.EndingCard}>
            <div className={styles.EndingImg}>
              <img
              className={styles.EndImg} src="https://static.vecteezy.com/system/resources/previews/028/212/208/non_2x/black-cat-hello-greeting-flat-cartoon-element-free-png.png" alt="cat" />
              </div>
            <div className={styles.endText}>That's It, for now. Bye Bye!</div>
          </div>
        </div>
      </div>
    </div>
    </>
   )
}