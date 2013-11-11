docCode.northwindDtoMetadata = {"schema":{"namespace":"Northwind.DtoModels","alias":"Self","annotation:UseStrongSpatialTypes":"false","xmlns:annotation":"http://schemas.microsoft.com/ado/2009/02/edm/annotation","xmlns":"http://schemas.microsoft.com/ado/2009/11/edm","cSpaceOSpaceMapping":"[[\"Northwind.DtoModels.Customer\",\"Northwind.DtoModels.Customer\"],[\"Northwind.DtoModels.Order\",\"Northwind.DtoModels.Order\"],[\"Northwind.DtoModels.OrderDetail\",\"Northwind.DtoModels.OrderDetail\"],[\"Northwind.DtoModels.Product\",\"Northwind.DtoModels.Product\"]]","entityType":[{"name":"Customer","key":{"propertyRef":{"name":"CustomerID"}},"property":[{"name":"CustomerID","type":"Edm.Guid","nullable":"false"},{"name":"CompanyName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"FragusIndex","type":"Edm.Int32"},{"name":"OrderCount","type":"Edm.Int32"}],"navigationProperty":{"name":"Orders","relationship":"Self.Order_Customer","fromRole":"Order_Customer_Target","toRole":"Order_Customer_Source"}},{"name":"Order","key":{"propertyRef":{"name":"OrderID"}},"property":[{"name":"OrderID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"CustomerID","type":"Edm.Guid"},{"name":"CustomerName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true"},{"name":"OrderDate","type":"Edm.DateTime"},{"name":"RequiredDate","type":"Edm.DateTime"},{"name":"ShippedDate","type":"Edm.DateTime"},{"name":"Freight","type":"Edm.Decimal","precision":"18","scale":"2"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Customer","relationship":"Self.Order_Customer","fromRole":"Order_Customer_Source","toRole":"Order_Customer_Target"},{"name":"OrderDetails","relationship":"Self.OrderDetail_Order","fromRole":"OrderDetail_Order_Target","toRole":"OrderDetail_Order_Source"}]},{"name":"OrderDetail","key":{"propertyRef":[{"name":"OrderID"},{"name":"ProductID"}]},"property":[{"name":"OrderID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"ProductID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"UnitPrice","type":"Edm.Decimal","precision":"18","scale":"2","nullable":"false"},{"name":"Quantity","type":"Edm.Int16","nullable":"false"},{"name":"Discount","type":"Edm.Single","nullable":"false"},{"name":"RowVersion","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Order","relationship":"Self.OrderDetail_Order","fromRole":"OrderDetail_Order_Source","toRole":"OrderDetail_Order_Target"},{"name":"Product","relationship":"Self.OrderDetail_Product","fromRole":"OrderDetail_Product_Source","toRole":"OrderDetail_Product_Target"}]},{"name":"Product","key":{"propertyRef":{"name":"ProductID"}},"property":[{"name":"ProductID","type":"Edm.Int32","nullable":"false","annotation:StoreGeneratedPattern":"Identity"},{"name":"ProductName","type":"Edm.String","maxLength":"40","fixedLength":"false","unicode":"true","nullable":"false"}]}],"association":[{"name":"Order_Customer","end":[{"role":"Order_Customer_Source","type":"Edm.Self.Order","multiplicity":"*"},{"role":"Order_Customer_Target","type":"Edm.Self.Customer","multiplicity":"0..1"}],"referentialConstraint":{"principal":{"role":"Order_Customer_Target","propertyRef":{"name":"CustomerID"}},"dependent":{"role":"Order_Customer_Source","propertyRef":{"name":"CustomerID"}}}},{"name":"OrderDetail_Order","end":[{"role":"OrderDetail_Order_Source","type":"Edm.Self.OrderDetail","multiplicity":"*"},{"role":"OrderDetail_Order_Target","type":"Edm.Self.Order","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"OrderDetail_Order_Target","propertyRef":{"name":"OrderID"}},"dependent":{"role":"OrderDetail_Order_Source","propertyRef":{"name":"OrderID"}}}},{"name":"OrderDetail_Product","end":[{"role":"OrderDetail_Product_Source","type":"Edm.Self.OrderDetail","multiplicity":"*"},{"role":"OrderDetail_Product_Target","type":"Edm.Self.Product","multiplicity":"1","onDelete":{"action":"Cascade"}}],"referentialConstraint":{"principal":{"role":"OrderDetail_Product_Target","propertyRef":{"name":"ProductID"}},"dependent":{"role":"OrderDetail_Product_Source","propertyRef":{"name":"ProductID"}}}}],"entityContainer":{"name":"NorthwindDtoContext","entitySet":[{"name":"Customers","entityType":"Self.Customer"},{"name":"Orders","entityType":"Self.Order"},{"name":"OrderDetails","entityType":"Self.OrderDetail"},{"name":"Products","entityType":"Self.Product"}],"associationSet":[{"name":"Order_Customer","association":"Self.Order_Customer","end":[{"role":"Order_Customer_Source","entitySet":"Orders"},{"role":"Order_Customer_Target","entitySet":"Customers"}]},{"name":"OrderDetail_Order","association":"Self.OrderDetail_Order","end":[{"role":"OrderDetail_Order_Source","entitySet":"OrderDetails"},{"role":"OrderDetail_Order_Target","entitySet":"Orders"}]},{"name":"OrderDetail_Product","association":"Self.OrderDetail_Product","end":[{"role":"OrderDetail_Product_Source","entitySet":"OrderDetails"},{"role":"OrderDetail_Product_Target","entitySet":"Products"}]}]}}};
