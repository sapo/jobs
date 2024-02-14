<template>
    <main>
        <h1>Vue HTTP Request</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Create vue code to call the API endpoint
                <a target="blank" href="http://localhost:9980/display-information.php">http://localhost:9980/display-information.php</a>
                request when the button below is clicked. <br>
                Parse the results and display the data in the div below.
            </p>

           <div class="quote">
               <p>Name:  </p>
               <p>Email: </p>
           </div>

           <button>Call API</button>
        </div>
    </main>
</template>

<script setup>
  const onClick = () => {
  }
</script>