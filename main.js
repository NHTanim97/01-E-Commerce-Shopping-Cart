
    // ------------increment------------------

    /* 
        increment() এটা একটা onclick event
        increment(incDec, prc, prcAmunt) 
        increment btn এর combind করা হয়েছে parameter.
    */
    function increment(incDec, prc, prcAmunt){

        const inputCount = document.getElementById(incDec);
        const price = document.getElementById(prc);
        const priceAmount = document.getElementById(prcAmunt)


        // right---
        const productAmount = document.getElementById('productAmount').innerHTML;

        const charge = document.getElementById('charge').innerHTML;
        const allTotalAmount = document.getElementById('allTotalAmount').innerHTML;



        /*
        inputCount.value = vaule কে target করা হয়েছে ।
        .value>= 5 মানে ৫ এর বেশি add করা যাবে না।
        */
        if(inputCount.value>= 5){
            inputCount.value = 5;
            alert('Only Five Products Allow');
        }
        /*
        inputCount.value++;
        btn এ click করলে ১ করে বারবে ।
        */
        else{
            inputCount.value++;

            /*
                parseInt দিয়ে string to convert number
                price এর সাথে price বার বার যোগ হয়ে priceAmount এ যাবে ।

                কারন বলা হয়েছে inputCount.value++; ১ করে বারবে ।

                ex : 600 + 600 = 1200 again 
                Totalresult + price (1200 + 600) = 1800

            */
            const result = parseInt(price.innerHTML) + parseInt(priceAmount.innerHTML);
            priceAmount.innerHTML = result;


            // for product amount
            const totalPrAmount = parseInt(price.innerHTML) + parseInt(productAmount);
            document.getElementById('productAmount').innerHTML = totalPrAmount;



            const charge_AddAmount = totalPrAmount + parseInt(charge);
            document.getElementById('allTotalAmount').innerHTML = charge_AddAmount;


            const kupon = document.getElementById('kupon');
             if(charge_AddAmount >= 3000){
                kupon.style.display = 'block';
             }
        }
    }









    // -----------------decrement-----------------------

    /* 
        decrement() এটা একটা onclick event
        decrement(incDec, prc, prcAmunt) 
        decrement btn এর combind করা হয়েছে parameter
    */
    function decrement(incDec, prc, prcAmunt){
        
        const inputCount = document.getElementById(incDec);
        const price = document.getElementById(prc);
        const priceAmount = document.getElementById(prcAmunt);



        // right-----------
        const productAmount = document.getElementById('productAmount').innerHTML;


        const charge = document.getElementById('charge').innerHTML;
        const allTotalAmount = document.getElementById('allTotalAmount').innerHTML;

        
        /*
        inputCount.value = vaule কে target করা হয়েছে ।
        .value>= 0 এর নিচে -১ এ মান যাবে না
        */
        if(inputCount.value<= 0){
            inputCount.value = 0;
            alert('Minimun One Products Allow')
        }
        /*
        inputCount.value--;
        btn এ click করলে ১ করে কমবে ।
        */
        else{
            inputCount.value--;


            /* 
               parseInt দিয়ে string to convert number
               Totalprice এর সাথে price বার বার বিয়োগ হয়ে priceAmount এ যাবে ।

               কারন বলা হয়েছে inputCount.value--; ১ করে কমবে ।

               ex :1800 - 600 = 1200 again 
               Totalresult - price (1200 + 600) = 600
               এখানে Totalresult = priceAmount
            */
            const result = parseInt(priceAmount.innerHTML) - parseInt(price.innerHTML);
            priceAmount.innerHTML = result;

            const totalPrAmount = parseInt(productAmount) - parseInt(price.innerHTML);
            document.getElementById('productAmount').innerHTML = totalPrAmount;


            
            const charge_AddAmount = totalPrAmount + parseInt(charge);
            document.getElementById('allTotalAmount').innerHTML = charge_AddAmount;
        }
    }




    // kupon

    const kupon = document.getElementById('kupon');
    kupon.style.display = 'none';

    const applyBtn = document.getElementById('applyBtn');
    applyBtn.addEventListener('click', ()=>{

        const kuponInput = document.getElementById('kuponInput');
        const allTotalAmount = document.getElementById('allTotalAmount').innerHTML;
        
        if(kuponInput.value === 'TA__ni__M'){
           const kuponAmount = allTotalAmount - 50;
           document.getElementById('allTotalAmount').innerHTML = kuponAmount;

           kuponInput.value = '';

           alert('Congratulation');

           kupon.style.display = 'none';
        }else{
            alert('Kupon not match');
        }
    })