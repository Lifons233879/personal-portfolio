document.addEventListener("DOMContentLoaded",()=>{
  const buttons=document.querySelectorAll(".category-button");
  const cards=document.querySelectorAll(".blog-card");
  const empty=document.getElementById("blog-empty");
  buttons.forEach(button=>{
    button.addEventListener("click",()=>{
      const category=button.dataset.category;
      let visible=0;
      buttons.forEach(item=>item.classList.toggle("is-active",item===button));
      cards.forEach(card=>{
        const show=category==="all"||card.dataset.category===category;
        card.hidden=!show;
        if(show) visible++;
      });
      if(empty) empty.hidden=visible!==0;
    });
  });
});
