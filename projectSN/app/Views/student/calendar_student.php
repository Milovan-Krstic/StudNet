<?= link_tag('css_files/calendar_student.css') ?>

      
      
      <div class="content">
        <div class="container">
          <div class="main">
        
            <div class="month1"> 
                   
              <span id="c" class="title">Calendar<br></span>
              
              <span class="title2">Please choose a date<br></span>
            </div>
            <div class="calendar">
              <ul class="weekdays">
                <li>Su</li>
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
              
              </ul>
              <div class="days">
                <ul class="days2">  
                  
                </ul>
              </div>
            </div>
            <div class="mesec">
              <div class="month"><img class="levo" src="<?= base_url("icons/levo.svg")?>" width="20px" height="20px"  ></div>
              <div class="month" id="monthID">      
              </div>
              <div class="month"><img class="desno" src="<?= base_url('icons/desno.svg')?>" width="20px" height="20px"  ></div>
              
            </div>
          </div>
      </div>
    </div>
      <div class="form-popup" id="myForm">
          <form class="form-container">
            <h1> Plan<br></h1>
            <p id="currDate"></p>
        
            <label for="task"></label>
            <input type="text" placeholder="Add task" name="task1" id="task1">
            <input type="text" placeholder="Add task" name="task2" id="task2" style="visibility: hidden;">
            <input type="text" placeholder="Add task" name="task3" id="task3" style="visibility: hidden;">
            <input type="text" placeholder="Add task" name="task4" id="task4" style="visibility: hidden;">
            <input type="text" placeholder="Add task" name="task5" id="task5" style="visibility: hidden;">
        
            
            <button type="button" class="btn addtask" onclick="addTaskField()" > Add Task</button>
            <button type="button" class="btn login" onclick="saveTasks()">Confirm</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div>
        


<script src="/js_files/calendar_student.js"></script>
