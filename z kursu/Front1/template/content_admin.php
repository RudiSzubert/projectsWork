<div id="Content">
    
    
    <div id="QuestionAdd">
        <div class="Single Text">
            <label for="QuestionAddLevel">Question level:</label>
            <input id="level" type="text" name="Level" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddValue">Question Value:</label>
            <input id="qval" type="text" name="Value" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddAnswers">Answer 1</label>
            <input id="ans1" type="text" name="Answers" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddAnswers">Answer 2</label>
            <input id="ans2" type="text" name="Answers" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddAnswers">Answer 3</label>
            <input id="ans3" type="text" name="Answers" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionAddCorrect">Answer 4</label>
            <input id="ans4" type="text" name="Correct" class="Text" />
        </div>
        <div class="Single Text">
            <label for="QuestionCorrect">Correct Answer:</label>
            <input id="correct" type="text" name="Correct" class="Text" />
        </div>
        <div class="Single Submit">
            <input type="submit" value="Dodaj" class="Button" id="addToBase" />
        </div>
        <div class="Single Submit">
            <input type="submit" value="getAll" class="Button" id="getAll" />
        </div>
        
    </div>
    <div style="clear: both">
    <?php
        include_once 'game/questions.php';
    ?>
    </div>
    
    <div id="QuestionsList">
        <ul class="ItemList">
            <li class="Head">
                <div class="Cell id">Nr</div>
                <div class="Cell level">Level</div>
                <div class="Cell qval">Value</div>
                <div class="Cell ans">Answer 1</div>
                <div class="Cell ans">Answer 2</div>
                <div class="Cell ans">Answer 3</div>
                <div class="Cell ans">Answer 4</div>
                <div class="Cell correct">Correct answer</div>
                <div class="Cell Edit">Edit</div>
            </li>
            
 
        </ul>
    </div>
    
</div>