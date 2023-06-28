export default class tableService {
  constructor() {}
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  toCapitalizeCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  getArrayValues(arr, property_list, settings = {}) {
    // buranın kullanılma amacı eğer datanın içinde array gelmişse aynı stepteki
    // dataların virgülle ayrılarak birleştirilmesi veya ilk index'in alınmasıdır.
    // data: {names: [{name:"test"},{name:"test2"}]}
    // property_list = [data.names.name]
    // console "test,test2"

    let result = [];
    if (["commas", "sum"].includes(settings.listManipulation)) {
      //propery list'i slice etmedik çünkü bu methoda verilirken edildi.
      arr.forEach((item) => {
        result = result.concat(
          this.getPropertyValue(item, property_list, settings)
        );
      });
    } else {
      result = result.concat(
        this.getPropertyValue(arr[0], property_list, settings)
      );
    }
    return result;
  }
  getPropertyValue(data, property_list, settings = {}) {
    let result = [];

    if (property_list.length > 1 && data[property_list[0]]) {
      if (Array.isArray(data[property_list[0]])) {
        result = result.concat(
          this.getArrayValues(
            data[property_list[0]],
            property_list.slice(1),
            settings
          )
        );
      } else if (property_list[0] in data) {
        result = result.concat(
          this.getPropertyValue(
            data[property_list[0]],
            property_list.slice(1),
            settings
          )
        );
      }
    } else {
      if (Array.isArray(data[property_list[0]])) {
        result = result.concat(
          this.getArrayValues(
            data[property_list[0]],
            property_list.slice(1),
            settings
          )
        );
      } else if (property_list[0] in data) {
        result.push(data[property_list[0]]);
      }
    }

    return result;
  }

  mergeColumns(data, columns, column){
    let values = []
    column?.mergeColumnNames.forEach((columnName)=>{
      values.push(this.readProperty(data, {name: columnName}))
    })
    return values.join(" ")
  }
  readProperty(data, column) {
    if (!data || !column.name) return null;

    let propertyPath = column.name.split(".");
    let settings = {
      listManipulation: column.list_manipulation
        ? column.list_manipulation
        : "first",
      textManipulation: column.text_manipulation
        ? column.text_manipulation
        : "default",
    };

    let showValue = "";
    if (["sum"].includes(settings.listManipulation)) {
      showValue = this.getPropertyValue(data, propertyPath, settings).reduce(
        (a, b) => a + b,
        0
      );
    } else {
      showValue = this.getPropertyValue(data, propertyPath, settings).join(",");
    }
    switch (settings.textManipulation) {
      case "lower":
        return showValue.toLowerCase();
      case "upper":
        return showValue.toUpperCase();
      case "title":
        return this.toTitleCase(showValue);
      case "capitalize":
        return this.toCapitalizeCase(showValue);
      default:
        return showValue;
    }
  }
}
