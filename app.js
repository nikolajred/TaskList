//  Form
// List of tasks

const tasks = [
{
	id: 1,
	completed: true,
	body: 'Engineer equipment will be maintained to standards ensuring task performance within prescribed time-frames.',
	title: 'Title1',
},
{
	id: 2,
	completed: false,
	body: 'Barriers of culture, language and business practice also complicate the task.',
	title: 'Title2',
}

];

(function(arrayOfTasks){
	  const objOfTasks = arrayOfTasks.reduce((acc, task) => {
	  	acc[task.id] = task;
	  	return acc;
	  },{});

	  renderAllTasks(objOfTasks);

function renderAllTasks(taskList){
	if(!taskList){
		console.log('send list of tasks');
	}
	const fragment =document.createDocumentFragment();
	Object.values(taskList).forEach(task => {
		console.log(task);
	});
};
})(tasks);