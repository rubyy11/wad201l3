const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      l=[]
      for (let x=0 ; x< all.length ; x++){
        if (all[x]['dueDate']==yesterday){
            l1="[ ]"
            if (all[x]['completed']==true){
                l1="[x]"
            }
            l.push(l1+all[x]['title']+" "+yesterday)
        }
        
      }
        return l
    }
  
    const dueToday = () => {
      l=[]
      for (let x=0;x<all.length;x++){
        if (all[x]['dueDate']==today){
            l1="[ ]"
            if (all[x]['completed']==true){
                l1="[x]"
            }
        l.push(l1+all[x]['title'])
        }

      }
      return l
    }
  
    const dueLater = () => {
      l=[]
      for (let x=0;x<all.length;x++){
        if (all[x]['dueDate']==tomorrow){
            l1="[ ]"
            if (all[x]['completed']==true){
                l1="[x]"
            }
        l.push(l1+all[x]['title']+" "+tomorrow)
        }

      }
      return l
    }
    
  
    const toDisplayableList = (list) => {
      y = list.join("\n")
      return y
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
