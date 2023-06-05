const componentTypes = ["button", "textInput", "dropdown", "table"]
export const defaultData = {
    "button": {
        val: "Submit"
    },
    "textInput": {
        val: "Type the email"
    },
    dropdown: {
        listValues: [
            "Macbook",
            "Ipad",
            "Table"
        ]
    },
    table: {
        row: 2,
        col: 2,
        tableHead: ["S.No", "Name"],
        entries: [
            [1, "Zenskar"],
            [2, "Notion"]
        ]
    }
}
export default componentTypes;