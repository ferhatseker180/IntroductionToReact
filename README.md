<div style="text-align:center;"> 
<h1 style="text-align:center; color: yellow"> Web Site Design With React </h1> 
<p style="text-align:center;">  </p>
</div>

<p>This project is a front-end project developed using React. The code has been written as clean as possible and separate packages have been created for the components.</p>
<br/>

![First React Project](https://raw.githubusercontent.com/ferhatseker180/IntroductionToReact/main/src/assets/First_React_Project.PNG)


<h2>Features</h2>
<ul>
  <li><strong>Props Structure:</strong> Data transfer between components is performed using props structure.</li>
  <li><strong>Data Management:</strong> Data is fetched from the <code>data.js</code> file.</li>
  <li><strong>Dynamic Structure:</strong> To achieve a truly dynamic structure, one of the most common hooks, <code>useState</code>, is used. Data is dynamically loaded according to the selected button, i.e., event listeners.</li>
  <li><strong>Design and Re-rendering:</strong> Design and re-rendering processes are carried out according to certain conditions, ensuring different layout designs or stylings. The ternary operator is used for this conditioning process.</li>
  <li><strong>Button Styling:</strong> Although the selected button is derived from the same component as the others, it has a distinctive appearance when selected.</li>
  <li><strong>Dynamic Component Creation:</strong> To prevent design errors due to many components or data issues, the number of components to be created in the design is dynamically adjusted using the <code>map</code> method. Thus, only as many components as the incoming data will be created, and this system will be automated.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>React</strong></li>
  <li><strong>JavaScript (ES6+)</strong></li>
  <li><strong>CSS</strong></li>
</ul>

<h2>Important Files and Folders</h2>
<ul>
  <li><code>src/components</code>: Folder containing all the components of the project.</li>
  <li><code>src/data.js</code>: File from which the data is fetched.</li>
  <li><code>src/App.js</code>: Main application component.</li>
</ul>

