import React from "react";


export default function Card(props){
return (
    <div className="flex flex-auto w-full" name="cards">
    <a class="flex flex-col items-center w-full rounded-lg border border-gray-700 shadow-md bg-darkBlue md:flex-row md:max-w-xl hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full h-96 rounded-t-lg border-gray-700 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.img_url} alt="" />
        <div class="flex flex-col justify-between p-4 w-full leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.title}</h5>
            <p class="mb-3 font-normal text-white">{props.description}</p>
        </div>
    </a>
</div>
);
}