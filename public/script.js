// gets a new activity from The Bored API
const getActivity = () => {  
  $.ajax({ 
    url: 'https://www.boredapi.com/api/activity',
    type: 'GET',
    dataType: "json",
    success: function (data) {
      // sets a random color to the activity and changes it to lowercase
      let fontColors = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#469990', '#dcbeff', '#9A6324', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9']
      let randColor = fontColors[Math.floor(Math.random() * fontColors.length)];
      let activity = document.getElementById('suggestedActivity');
      activity.innerHTML = data.activity.toLowerCase();
      activity.style.color = randColor;
    },
    error: function (error) {
        console.log(`getActivity Error: ${error}`);
    }
  })
}

// adds an activity to the Today's Activites list
const addActivity = async () => {
  let activity = document.getElementById('suggestedActivity').innerHTML;  
  let newLine = document.createTextNode(activity);
  let li = document.createElement('li');
  li.appendChild(newLine);
  document.getElementById('activityList').appendChild(li);
  // increments activity count
  let activityCount = parseInt(document.getElementById('activityCount').innerHTML);
  console.log(parseInt(activityCount))
  activityCount++
  document.getElementById('activityCount').innerHTML = activityCount.toString();
  // gets a new activity
  getActivity();
}

// Sets Today's Activities list to empty string and sets the count to 0
const deleteActivities = () => {
  document.getElementById('activityList').innerHTML = '';
  document.getElementById('activityCount').innerHTML = '0';
};

// gets a new activity on page load
window.onload = getActivity();







