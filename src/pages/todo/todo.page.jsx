import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../../component/card/card.component";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: "a", title: "title1" },
        { id: "b", title: "title2" },
        { id: "c", title: "title3" },
        { id: "d", title: "title4" },
      ],
      list1: [
        { id: "a1", title: "title11" },
        { id: "b1", title: "title21" },
        { id: "c1", title: "title31" },
        { id: "d1", title: "title41" },
      ],
      list2: [
        { id: "a2", title: "title12" },
        { id: "b2", title: "title22" },
        { id: "c2", title: "title32" },
        { id: "d2", title: "title42" },
      ],
    };
  }
  handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const destinationItems = [...this.state[result.destination.droppableId]];
    const sourceItems = [...this.state[result.source.droppableId]];
    console.log({ destinationItems, sourceItems });
    const [sourceElement] = sourceItems.splice(result.source.index, 1);
    console.log("sourceElement", sourceElement);
    destinationItems.splice(result.destination.index, 0, sourceElement);
    this.setState({
      [result.destination.droppableId]: destinationItems,
      [result.source.droppableId]: sourceItems,
    });
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={this.handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <ul
                style={{ border: "1px solid", margin: "5px 5px" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.list.map((elem, idx) => {
                  return (
                    <Draggable key={elem.id} draggableId={elem.id} index={idx}>
                      {(provided) => {
                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card title={elem.title} />
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="list1">
            {(provided) => (
              <ul
                style={{ border: "1px solid", margin: "5px 5px" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.list1.map((elem, idx) => {
                  return (
                    <Draggable key={elem.id} draggableId={elem.id} index={idx}>
                      {(provided) => {
                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card title={elem.title} />
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="list2">
            {(provided) => (
              <ul
                style={{ border: "1px solid", margin: "5px 5px" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.list2.map((elem, idx) => {
                  return (
                    <Draggable key={elem.id} draggableId={elem.id} index={idx}>
                      {(provided) => {
                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card title={elem.title} />
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
