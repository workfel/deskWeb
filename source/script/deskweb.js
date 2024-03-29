(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"deskweb.Application","qx.revision":"","qx.theme":"deskweb.theme.Theme","qx.version":"3.0.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"deskweb":{"resourceUri":"../source/resource","sourceUri":"../source/class"},"qx":{"resourceUri":"../../../../dev/qooxdoo/sdk/framework/source/resource","sourceUri":"../../../../dev/qooxdoo/sdk/framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:deskweb.9c7a0d9de251.js","qx:qx/Bootstrap.js","qx:qx/core/Environment.js","qx:qx/util/OOUtil.js","qx:qx/Theme.js","qx:qx/bom/client/EcmaScript.js","qx:qx/lang/normalize/String.js","qx:qx/dev/StackTrace.js","qx:qx/lang/normalize/Date.js","qx:qx/lang/Array.js","qx:qx/lang/normalize/Function.js","qx:qx/lang/normalize/Array.js","qx:qx/Mixin.js","qx:qx/core/Aspect.js","qx:qx/lang/normalize/Object.js","qx:qx/Interface.js","qx:qx/lang/normalize/Error.js","qx:qx/core/Property.js","qx:qx/Class.js","qx:qx/data/MBinding.js","qx:qx/data/SingleValueBinding.js","qx:qx/lang/String.js","qx:qx/lang/Function.js","qx:qx/lang/Type.js","qx:qx/core/Assert.js","qx:qx/type/BaseError.js","qx:qx/core/AssertionError.js","qx:qx/core/ObjectRegistry.js","qx:qx/lang/JsonImpl.js","qx:qx/core/GlobalError.js","qx:qx/event/GlobalError.js","qx:qx/core/WindowError.js","qx:qx/bom/client/Json.js","qx:qx/lang/Json.js","qx:qx/data/IListData.js","qx:qx/core/ValidationError.js","qx:qx/util/RingBuffer.js","qx:qx/log/appender/RingBuffer.js","qx:qx/log/Logger.js","qx:qx/core/MLogging.js","qx:qx/dom/Node.js","qx:qx/bom/Event.js","qx:qx/bom/Style.js","qx:qx/bom/client/Engine.js","qx:qx/bom/client/CssTransition.js","qx:qx/event/Manager.js","qx:qx/event/IEventHandler.js","qx:qx/event/Registration.js","qx:qx/core/MEvent.js","qx:qx/event/IEventDispatcher.js","qx:qx/core/MProperty.js","qx:qx/core/MAssert.js","qx:qx/core/Object.js","qx:qx/util/DisposeUtil.js","qx:qx/event/type/Event.js","qx:qx/util/ObjectPool.js","qx:qx/event/Pool.js","qx:qx/event/dispatch/Direct.js","qx:qx/event/handler/Object.js","qx:qx/event/type/Data.js","qx:qx/theme/modern/Decoration.js","deskweb:deskweb/theme/Decoration.js","qx:qx/bom/client/OperatingSystem.js","qx:qx/theme/modern/Font.js","deskweb:deskweb/theme/Font.js","qx:qx/theme/modern/Appearance.js","deskweb:deskweb/theme/Appearance.js","qx:qx/theme/icon/Tango.js","qx:qx/bom/client/Css.js","qx:qx/bom/client/Browser.js","qx:qx/theme/modern/Color.js","deskweb:deskweb/theme/Color.js","deskweb:deskweb/theme/Theme.js","qx:qx/locale/MTranslation.js","qx:qx/application/IApplication.js","qx:qx/core/BaseInit.js","qx:qx/event/type/Native.js","qx:qx/event/handler/Window.js","qx:qx/event/handler/Application.js","qx:qx/core/Init.js","qx:qx/application/AbstractGui.js","qx:qx/theme/manager/Meta.js","qx:qx/util/ValueManager.js","qx:qx/theme/manager/Color.js","qx:qx/util/ColorUtil.js","qx:qx/theme/manager/Decoration.js","qx:qx/ui/style/Stylesheet.js","qx:qx/bom/Stylesheet.js","qx:qx/dom/Element.js","qx:qx/bom/client/Html.js","qx:qx/bom/element/Attribute.js","qx:qx/util/Uri.js","qx:qx/bom/client/Stylesheet.js","qx:qx/lang/Object.js","qx:qx/ui/decoration/MBackgroundColor.js","qx:qx/ui/decoration/IDecorator.js","qx:qx/ui/decoration/Abstract.js","qx:qx/ui/decoration/MBackgroundImage.js","qx:qx/util/AliasManager.js","qx:qx/util/LibraryManager.js","qx:qx/bom/client/Transport.js","qx:qx/util/ResourceManager.js","qx:qx/ui/decoration/MSingleBorder.js","qx:qx/ui/decoration/MDoubleBorder.js","qx:qx/ui/decoration/MBorderRadius.js","qx:qx/ui/decoration/MBorderImage.js","qx:qx/ui/decoration/MLinearBackgroundGradient.js","qx:qx/bom/element/Opacity.js","qx:qx/bom/element/Clip.js","qx:qx/bom/element/Cursor.js","qx:qx/bom/element/BoxSizing.js","qx:qx/bom/element/Style.js","qx:qx/bom/Document.js","qx:qx/bom/Viewport.js","qx:qx/ui/decoration/MBoxShadow.js","qx:qx/ui/decoration/Decorator.js","qx:qx/theme/manager/Font.js","qx:qx/bom/Font.js","qx:qx/bom/webfonts/WebFont.js","qx:qx/bom/webfonts/Manager.js","qx:qx/event/Timer.js","qx:qx/bom/webfonts/Validator.js","qx:qx/bom/element/Dimension.js","qx:qx/theme/manager/Icon.js","qx:qx/theme/manager/Appearance.js","qx:qx/ui/tooltip/Manager.js","qx:qx/ui/core/MLayoutHandling.js","qx:qx/ui/core/LayoutItem.js","qx:qx/util/PropertyUtil.js","qx:qx/ui/core/queue/Layout.js","qx:qx/type/BaseArray.js","qx:qxWeb.js","qx:qx/bom/Selector.js","qx:qx/module/Css.js","qx:qx/bom/element/Class.js","qx:qx/bom/element/Location.js","qx:qx/module/Polyfill.js","qx:qx/module/Event.js","qx:qx/event/Emitter.js","qx:qx/module/Animation.js","qx:qx/bom/element/Animation.js","qx:qx/bom/client/CssAnimation.js","qx:qx/bom/element/AnimationCss.js","qx:qx/bom/element/AnimationHandle.js","qx:qx/bom/element/AnimationJs.js","qx:qx/bom/AnimationFrame.js","qx:qx/bom/client/CssTransform.js","qx:qx/bom/element/Transform.js","qx:qx/util/DeferredCallManager.js","qx:qx/util/DeferredCall.js","qx:qx/html/Element.js","qx:qx/event/handler/Appear.js","qx:qx/event/dispatch/AbstractBubbling.js","qx:qx/event/dispatch/DomBubbling.js","qx:qx/event/handler/Element.js","qx:qx/event/handler/UserAction.js","qx:qx/event/handler/Mouse.js","qx:qx/event/type/Dom.js","qx:qx/event/type/Touch.js","qx:qx/event/type/Tap.js","qx:qx/bom/client/Scroll.js","qx:qx/bom/element/Scroll.js","qx:qx/event/type/Swipe.js","qx:qx/bom/client/Event.js","qx:qx/event/handler/Orientation.js","qx:qx/event/type/Orientation.js","qx:qx/event/handler/TouchCore.js","qx:qx/event/handler/Touch.js","qx:qx/bom/client/Device.js","qx:qx/event/handler/MouseEmulation.js","qx:qx/event/type/Mouse.js","qx:qx/event/type/MouseWheel.js","qx:qx/dom/Hierarchy.js","qx:qx/event/handler/Keyboard.js","qx:qx/event/type/KeyInput.js","qx:qx/event/type/KeySequence.js","qx:qx/event/util/Keyboard.js","qx:qx/event/handler/Focus.js","qx:qx/bom/Selection.js","qx:qx/bom/Range.js","qx:qx/util/StringSplit.js","qx:qx/event/handler/Input.js","qx:qx/event/handler/Capture.js","qx:qx/event/handler/DragDrop.js","qx:qx/event/type/Drag.js","qx:qx/ui/core/MPlacement.js","qx:qx/event/Idle.js","qx:qx/util/placement/Placement.js","qx:qx/util/placement/AbstractAxis.js","qx:qx/util/placement/DirectAxis.js","qx:qx/util/placement/KeepAlignAxis.js","qx:qx/util/placement/BestFitAxis.js","qx:qx/ui/core/Widget.js","qx:qx/ui/core/EventHandler.js","qx:qx/ui/layout/Abstract.js","qx:qx/ui/core/queue/Visibility.js","qx:qx/ui/core/queue/Manager.js","qx:qx/ui/core/queue/Widget.js","qx:qx/ui/core/queue/Appearance.js","qx:qx/ui/core/queue/Dispose.js","qx:qx/type/BaseString.js","qx:qx/locale/LocalizedString.js","qx:qx/locale/Manager.js","qx:qx/bom/client/Locale.js","qx:qx/ui/basic/Image.js","qx:qx/html/Image.js","qx:qx/bom/element/Decoration.js","qx:qx/io/ImageLoader.js","qx:qx/bom/element/Background.js","qx:qx/ui/core/DragDropCursor.js","qx:qx/event/handler/Offline.js","qx:qx/bom/Element.js","qx:qx/event/dispatch/MouseCapture.js","qx:qx/bom/client/Plugin.js","qx:qx/xml/Document.js","qx:qx/bom/client/Xml.js","qx:qx/event/type/Focus.js","qx:qx/ui/core/MChildrenHandling.js","qx:qx/ui/container/Composite.js","qx:qx/ui/popup/Popup.js","qx:qx/ui/popup/Manager.js","qx:qx/ui/tooltip/ToolTip.js","qx:qx/ui/layout/HBox.js","qx:qx/ui/layout/Util.js","qx:qx/ui/basic/Atom.js","qx:qx/ui/layout/Atom.js","qx:qx/ui/form/IStringForm.js","qx:qx/ui/basic/Label.js","qx:qx/html/Label.js","qx:qx/bom/Label.js","qx:qx/ui/form/IForm.js","qx:qx/application/Standalone.js","qx:qx/ui/window/MDesktop.js","qx:qx/ui/core/MRemoteChildrenHandling.js","qx:qx/ui/core/MRemoteLayoutHandling.js","qx:qx/ui/window/IWindowManager.js","qx:qx/ui/window/IDesktop.js","qx:qx/ui/window/Manager.js","qx:qx/ui/core/MMovable.js","qx:qx/ui/core/MContentPadding.js","qx:qx/ui/core/MResizable.js","qx:qx/ui/window/Window.js","qx:qx/ui/layout/VBox.js","qx:qx/ui/core/FocusHandler.js","qx:qx/ui/layout/Grid.js","qx:qx/ui/core/MExecutable.js","qx:qx/ui/form/IExecutable.js","qx:qx/ui/form/Button.js","qx:qx/ui/core/MBlocker.js","qx:qx/ui/core/Blocker.js","qx:qx/html/Blocker.js","qx:qx/ui/root/Abstract.js","qx:qx/ui/root/Application.js","qx:qx/ui/layout/Canvas.js","qx:qx/html/Root.js","deskweb:deskweb/Application.js","qx:qx/log/appender/Util.js","qx:qx/log/appender/Native.js","qx:qx/log/appender/Console.js","deskweb:deskweb/desktop/Background.js","deskweb:deskweb/desktop/Header.js","qx:qx/ui/form/MenuButton.js","qx:qx/ui/menu/Manager.js","qx:qx/ui/menu/Menu.js","qx:qx/ui/menu/Layout.js","qx:qx/ui/menu/Separator.js","qx:qx/ui/menu/AbstractButton.js","qx:qx/ui/menu/ButtonLayout.js","qx:qx/ui/container/SlideBar.js","qx:qx/ui/form/RepeatButton.js","qx:qx/event/AcceleratingTimer.js","qx:qx/ui/core/scroll/ScrollPane.js","qx:qx/ui/layout/Grow.js","qx:qx/ui/menu/MenuSlideBar.js","qx:qx/ui/form/HoverButton.js","qx:qx/ui/menubar/Button.js","qx:qx/ui/toolbar/ToolBar.js","qx:qx/ui/core/Spacer.js","qx:qx/ui/toolbar/Separator.js","qx:qx/ui/toolbar/Part.js","qx:qx/ui/toolbar/PartContainer.js","qx:qx/ui/menu/Button.js","deskweb:deskweb/tools/Clock.js","qx:qx/util/TimerManager.js","deskweb:deskweb/desktop/Menu.js","qx:qx/ui/core/scroll/MWheelHandling.js","qx:qx/ui/core/scroll/MScrollBarFactory.js","qx:qx/ui/core/scroll/IScrollBar.js","qx:qx/ui/core/scroll/NativeScrollBar.js","qx:qx/ui/core/scroll/ScrollBar.js","qx:qx/ui/form/MForm.js","qx:qx/ui/form/IRange.js","qx:qx/ui/form/INumberForm.js","qx:qx/ui/form/Slider.js","qx:qx/ui/core/scroll/ScrollSlider.js","qx:qx/ui/core/scroll/AbstractScrollArea.js","qx:qx/ui/container/Scroll.js","qx:qx/ui/layout/Flow.js","qx:qx/ui/layout/LineSizeIterator.js","qx:qx/io/request/AbstractRequest.js","qx:qx/util/Request.js","qx:qx/util/Serializer.js","qx:qx/io/request/Xhr.js","qx:qx/bom/request/Xhr.js","qx:qx/util/ResponseParser.js","qx:qx/ui/progressive/State.js","qx:qx/data/Conversion.js","qx:qx/ui/core/MSingleSelectionHandling.js","qx:qx/ui/core/SingleSelectionManager.js","qx:qx/ui/core/ISingleSelectionProvider.js","qx:qx/ui/form/MModelSelection.js","qx:qx/data/marshal/MEventBubbling.js","qx:qx/data/Array.js","qx:qx/ui/core/ISingleSelection.js","qx:qx/ui/form/IModelSelection.js","qx:qx/ui/form/RadioGroup.js","qx:qx/io/PartLoader.js","qx:qx/Part.js","qx:qx/io/part/Package.js","qx:qx/bom/request/Script.js","qx:qx/io/part/Part.js","qx:qx/io/part/ClosurePart.js","qx:qx/ui/treevirtual/MTreePrimitive.js","qx:qx/ui/core/selection/Abstract.js","qx:qx/ui/core/selection/Widget.js","qx:qx/ui/core/selection/ScrollArea.js","qx:qx/ui/core/MMultiSelectionHandling.js","qx:qx/ui/core/IMultiSelection.js","qx:qx/ui/form/List.js","qx:qx/event/message/Bus.js","qx:qx/event/message/Message.js","qx:qx/ui/form/RadioButtonGroup.js","qx:qx/ui/virtual/cell/ICell.js","qx:qx/ui/virtual/cell/Abstract.js","qx:qx/ui/virtual/cell/CellStylesheet.js","qx:qx/ui/virtual/cell/Cell.js","qx:qx/ui/virtual/cell/Date.js","qx:qx/util/format/IFormat.js","qx:qx/util/format/DateFormat.js","qx:qx/locale/Date.js","qx:qx/ui/table/ICellRenderer.js","qx:qx/ui/table/cellrenderer/Abstract.js","qx:qx/util/Permutation.js","qx:qx/ui/virtual/core/ILayer.js","qx:qx/ui/virtual/layer/Abstract.js","qx:qx/io/remote/Exchange.js","qx:qx/io/remote/transport/Abstract.js","qx:qx/io/remote/transport/Iframe.js","qx:qx/event/handler/Iframe.js","qx:qx/bom/Iframe.js","qx:qx/io/remote/transport/Script.js","qx:qx/io/remote/transport/XmlHttp.js","qx:qx/io/remote/Response.js","qx:qx/ui/table/cellrenderer/Default.js","qx:qx/bom/String.js","qx:qx/util/StringEscape.js","qx:qx/util/format/NumberFormat.js","qx:qx/locale/Number.js","qx:qx/ui/table/ICellEditorFactory.js","qx:qx/ui/table/celleditor/AbstractField.js","qx:qx/ui/table/celleditor/TextField.js","qx:qx/ui/form/AbstractField.js","qx:qx/html/Input.js","qx:qx/bom/Input.js","qx:qx/ui/form/TextField.js","qx:qx/ui/table/IHeaderRenderer.js","qx:qx/ui/table/headerrenderer/Default.js","qx:qx/ui/table/headerrenderer/HeaderCell.js","qx:qx/ui/table/columnmodel/Basic.js","qx:qx/ui/table/columnmodel/Resize.js","qx:qx/ui/core/ColumnData.js","qx:qx/ui/table/columnmodel/resizebehavior/Abstract.js","qx:qx/ui/table/columnmodel/resizebehavior/Default.js","qx:qx/bom/Lifecycle.js","qx:qx/ui/mobile/core/Widget.js","qx:qx/ui/mobile/core/EventHandler.js","qx:qx/ui/mobile/core/DomUpdatedHandler.js","qx:qx/ui/mobile/layout/Abstract.js","qx:qx/ui/mobile/dialog/Popup.js","qx:qx/ui/mobile/core/MLayoutHandling.js","qx:qx/ui/mobile/core/MChildrenHandling.js","qx:qx/ui/mobile/container/Composite.js","qx:qx/ui/mobile/form/MState.js","qx:qx/ui/form/MModelProperty.js","qx:qx/ui/form/IModel.js","qx:qx/ui/mobile/form/Input.js","qx:qx/ui/mobile/form/MText.js","qx:qx/ui/mobile/form/MValue.js","qx:qx/ui/mobile/form/TextArea.js","qx:qx/ui/mobile/layout/AbstractBox.js","qx:qx/ui/mobile/layout/VBox.js","qx:qx/ui/mobile/basic/Atom.js","qx:qx/ui/mobile/layout/HBox.js","qx:qx/ui/mobile/basic/Image.js","qx:qx/ui/mobile/basic/Label.js","qx:qx/ui/mobile/core/Blocker.js","qx:qx/ui/mobile/dialog/Dialog.js","qx:qx/ui/table/selection/Manager.js","qx:qx/ui/treevirtual/SelectionManager.js","qx:qx/ui/table/ITableModel.js","qx:qx/ui/table/model/Abstract.js","qx:qx/ui/treevirtual/SimpleTreeDataModel.js","qx:qx/ui/table/selection/Model.js","qx:qx/ui/table/Table.js","qx:qx/ui/table/IRowRenderer.js","qx:qx/ui/table/rowrenderer/Default.js","qx:qx/ui/table/IColumnMenuButton.js","qx:qx/ui/table/columnmenu/Button.js","qx:qx/ui/table/IColumnMenuItem.js","qx:qx/ui/form/IBooleanForm.js","qx:qx/ui/menu/CheckBox.js","qx:qx/ui/table/columnmenu/MenuItem.js","qx:qx/ui/table/pane/Pane.js","qx:qx/ui/table/pane/Header.js","qx:qx/ui/core/scroll/MTouchScroll.js","qx:qx/ui/table/pane/Scroller.js","qx:qx/ui/table/pane/Clipper.js","qx:qx/ui/table/pane/FocusIndicator.js","qx:qx/ui/table/pane/CellEvent.js","qx:qx/lang/Number.js","qx:qx/ui/table/pane/Model.js","qx:qx/ui/table/model/Simple.js","qx:qx/ui/treevirtual/TreeVirtual.js","qx:qx/ui/treevirtual/SimpleTreeDataCellRenderer.js","qx:qx/ui/treevirtual/DefaultDataCellRenderer.js","qx:qx/ui/treevirtual/SimpleTreeDataRowRenderer.js","qx:qx/ui/mobile/list/renderer/Abstract.js","qx:qx/ui/virtual/selection/Abstract.js","qx:qx/ui/virtual/core/Pane.js","qx:qx/ui/virtual/core/Axis.js","qx:qx/ui/virtual/core/CellEvent.js","qx:qx/ui/virtual/selection/Row.js","qx:qx/ui/virtual/selection/Column.js","qx:qx/theme/indigo/Font.js","qx:qx/theme/simple/Appearance.js","qx:qx/theme/simple/Image.js","qx:qx/theme/indigo/Appearance.js","qx:qx/theme/simple/Decoration.js","qx:qx/theme/indigo/Decoration.js","qx:qx/theme/indigo/Color.js","qx:qx/theme/Indigo.js","qx:qx/module/event/Touch.js","qx:qx/ui/form/IRadioItem.js","qx:qx/ui/form/RadioButton.js","qx:qx/ui/tabview/TabButton.js","qx:qx/ui/progressive/renderer/table/cell/Abstract.js","qx:qx/ui/progressive/renderer/table/cell/Conditional.js","qx:qx/ui/form/IColorForm.js","qx:qx/ui/control/ColorSelector.js","qx:qx/ui/groupbox/GroupBox.js","qx:qx/ui/form/Spinner.js","qx:qx/dev/unit/Sinon.js","qx:qx/ui/embed/AbstractIframe.js","qx:qx/ui/embed/ThemedIframe.js","qx:qx/ui/embed/Iframe.js","qx:qx/html/Iframe.js","qx:qx/ui/mobile/form/TextField.js","qx:qx/ui/mobile/form/PasswordField.js","qx:qx/ui/virtual/layer/GridLines.js","qx:qx/module/util/Array.js","qx:qx/ui/splitpane/HLayout.js","qx:qx/ui/list/provider/IListProvider.js","qx:qx/ui/virtual/core/IWidgetCellProvider.js","qx:qx/ui/list/core/MWidgetController.js","qx:qx/ui/list/provider/WidgetProvider.js","qx:qx/ui/virtual/layer/WidgetCell.js","qx:qx/util/Delegate.js","qx:qx/ui/virtual/cell/IWidgetCell.js","qx:qx/ui/virtual/cell/AbstractWidget.js","qx:qx/ui/virtual/cell/WidgetCell.js","qx:qx/ui/form/ListItem.js","qx:qx/ui/form/core/AbstractVirtualBox.js","qx:qx/ui/form/core/VirtualDropDownList.js","qx:qx/ui/virtual/core/Scroller.js","qx:qx/ui/virtual/selection/MModel.js","qx:qx/data/controller/ISelection.js","qx:qx/ui/list/List.js","qx:qx/ui/virtual/layer/AbstractBackground.js","qx:qx/ui/virtual/layer/Row.js","qx:qx/ui/form/VirtualSelectBox.js","qx:qx/event/handler/OrientationCore.js","qx:qx/data/controller/website/List.js","qx:qx/bom/Template.js","qx:qx/ui/mobile/container/INavigation.js","qx:qx/data/marshal/IMarshaler.js","qx:qx/data/marshal/Json.js","qx:qx/ui/virtual/selection/CellRectangle.js","qx:qx/ui/virtual/selection/CellLines.js","qx:qx/dev/unit/TestFunction.js","qx:qx/ui/table/model/Filtered.js","qx:qx/dev/unit/AbstractTestSuite.js","qx:qx/dev/unit/TestClass.js","qx:qx/dev/unit/TestCase.js","qx:qx/dev/unit/AsyncWrapper.js","qx:qx/dev/unit/RequirementError.js","qx:qx/ui/form/IDateForm.js","qx:qx/ui/control/DateChooser.js","qx:qx/ui/toolbar/Button.js","qx:qx/data/store/Json.js","qx:qx/data/store/Jsonp.js","qx:qx/io/request/Jsonp.js","qx:qx/bom/request/Jsonp.js","qx:qx/ui/progressive/renderer/table/cell/String.js","qx:qx/ui/progressive/renderer/table/cell/Icon.js","qx:qx/ui/progressive/renderer/table/cell/Image.js","qx:qx/module/Dataset.js","qx:qx/bom/element/Dataset.js","qx:qx/ui/form/renderer/IFormRenderer.js","qx:qx/ui/splitpane/Pane.js","qx:qx/ui/splitpane/Slider.js","qx:qx/ui/splitpane/Splitter.js","qx:qx/ui/splitpane/Blocker.js","qx:qx/ui/splitpane/VLayout.js","qx:qx/ui/mobile/toolbar/Separator.js","qx:qx/ui/tree/core/IVirtualTree.js","qx:qx/ui/tree/VirtualTree.js","qx:qx/ui/tree/provider/IVirtualTreeProvider.js","qx:qx/ui/tree/core/MWidgetController.js","qx:qx/ui/tree/provider/WidgetProvider.js","qx:qx/ui/tree/core/AbstractItem.js","qx:qx/ui/tree/core/FolderOpenButton.js","qx:qx/ui/tree/VirtualTreeItem.js","qx:qx/log/appender/RhinoConsole.js","qx:qx/ui/progressive/renderer/table/Widths.js","qx:qx/ui/tree/core/IVirtualTreeDelegate.js","qx:qx/ui/virtual/layer/CellSpanManager.js","qx:qx/ui/mobile/embed/Canvas.js","qx:qx/data/store/Rest.js","qx:qx/bom/client/Flash.js","qx:qx/ui/form/SplitButton.js","qx:qx/ui/toolbar/SplitButton.js","qx:qx/ui/toolbar/MenuButton.js","qx:qx/ui/table/cellrenderer/AbstractImage.js","qx:qx/ui/menu/RadioButton.js","qx:qx/ui/form/AbstractSelectBox.js","qx:qx/ui/form/ComboBox.js","qx:qx/application/Routing.js","qx:qx/event/Messaging.js","qx:qx/bom/History.js","qx:qx/bom/HashHistory.js","qx:qx/bom/IframeHistory.js","qx:qx/bom/NativeHistory.js","qx:qx/ui/core/Command.js","qx:qx/bom/Shortcut.js","qx:qx/locale/Key.js","qx:qx/dev/unit/MTestLoader.js","qx:qx/dev/unit/TestSuite.js","qx:qx/dev/unit/TestResult.js","qx:qx/dev/Debug.js","qx:qx/dev/unit/MeasurementResult.js","qx:qx/dev/unit/JsUnitTestResult.js","qx:qx/application/Inline.js","qx:qx/ui/root/Page.js","qx:qx/ui/layout/Basic.js","qx:qx/dev/unit/TestLoaderInline.js","qx:qx/ui/progressive/model/Abstract.js","qx:qx/module/Placement.js","qx:qx/ui/form/Resetter.js","qx:qx/ui/mobile/list/renderer/Default.js","qx:qx/ui/treevirtual/MFamily.js","qx:qx/ui/mobile/form/Slider.js","qx:qx/module/dev/FakeServer.js","qx:qx/dev/FakeServer.js","qx:qx/ui/embed/HtmlArea.js","qx:qx/bom/htmlarea/HtmlArea.js","qx:qx/bom/htmlarea/manager/Command.js","qx:qx/bom/htmlarea/manager/UndoRedo.js","qx:qx/ui/mobile/layout/CardAnimation.js","qx:qx/util/Animation.js","qx:qx/event/handler/ElementResize.js","qx:qx/data/store/Offline.js","qx:qx/bom/Storage.js","qx:qx/bom/storage/Web.js","qx:qx/bom/storage/UserData.js","qx:qx/bom/storage/Memory.js","qx:qx/type/Array.js","qx:qx/ui/table/headerrenderer/Icon.js","qx:qx/ui/form/validation/Manager.js","qx:qx/ui/form/validation/AsyncValidator.js","qx:qx/log/appender/Element.js","qx:qx/ui/form/renderer/AbstractRenderer.js","qx:qx/ui/form/renderer/Single.js","qx:qx/bom/GeoLocation.js","qx:qx/event/type/GeoPosition.js","qx:qx/ui/tabview/TabView.js","qx:qx/ui/container/Stack.js","qx:qx/ui/tabview/Page.js","qx:qx/module/util/Type.js","qx:qx/ui/form/renderer/SinglePlaceholder.js","qx:qx/ui/virtual/cell/AbstractImage.js","qx:qx/ui/virtual/cell/IWidgetCellDelegate.js","qx:qx/theme/classic/Decoration.js","qx:qx/theme/classic/Appearance.js","qx:qx/theme/classic/Font.js","qx:qx/theme/icon/Oxygen.js","qx:qx/theme/classic/Color.js","qx:qx/theme/Classic.js","qx:qx/ui/table/celleditor/PasswordField.js","qx:qx/ui/form/PasswordField.js","qx:qx/ui/form/SelectBox.js","qx:qx/ui/virtual/cell/Number.js","qx:qx/event/type/Rest.js","qx:qx/ui/mobile/dialog/Menu.js","qx:qx/ui/mobile/form/Button.js","qx:qx/ui/mobile/container/ScrollComposite.js","qx:qx/ui/mobile/list/List.js","qx:qx/ui/mobile/list/provider/Provider.js","qx:qx/ui/embed/Canvas.js","qx:qx/html/Canvas.js","qx:qx/ui/mobile/form/RadioGroup.js","qx:qx/ui/mobile/core/Root.js","qx:qx/ui/mobile/form/renderer/AbstractRenderer.js","qx:qx/ui/mobile/form/renderer/Single.js","qx:qx/ui/mobile/form/ToggleButton.js","qx:qx/ui/mobile/form/RadioButton.js","qx:qx/ui/mobile/form/NumberField.js","qx:qx/ui/mobile/form/CheckBox.js","qx:qx/ui/mobile/form/SelectBox.js","qx:qx/ui/mobile/form/Row.js","qx:qx/ui/mobile/form/Label.js","qx:qx/ui/mobile/form/renderer/SinglePlaceholder.js","qx:qx/ui/mobile/dialog/Picker.js","qx:qx/bom/WebWorker.js","qx:qx/core/MBindTo.js","qx:qx/ui/table/celleditor/SelectBox.js","qx:qx/application/Mobile.js","qx:qx/dev/unit/TestLoaderMobile.js","qx:qx/ui/mobile/toolbar/ToolBar.js","qx:qx/data/controller/MSelection.js","qx:qx/data/controller/List.js","qx:qx/log/appender/NodeConsole.js","qx:qx/module/Messaging.js","qx:qx/ui/progressive/renderer/Abstract.js","qx:qx/ui/progressive/structure/Abstract.js","qx:qx/ui/progressive/structure/Default.js","qx:qx/ui/progressive/headfoot/Abstract.js","qx:qx/ui/progressive/headfoot/Null.js","qx:qx/module/Attribute.js","qx:qx/bom/Html.js","qx:qx/ui/mobile/container/Collapsible.js","qx:qx/ui/mobile/toolbar/Button.js","qx:qx/dev/unit/MRequirementsBasic.js","qx:qx/io/remote/Rpc.js","qx:qx/io/remote/Request.js","qx:qx/io/remote/RequestQueue.js","qx:qx/ui/table/cellrenderer/Conditional.js","qx:qx/ui/table/cellrenderer/Html.js","qx:qx/bom/client/PhoneGap.js","qx:qx/ui/mobile/core/MResize.js","qx:qx/ui/mobile/page/Page.js","qx:qx/ui/mobile/page/NavigationPage.js","qx:qx/ui/mobile/navigationbar/Title.js","qx:qx/ui/mobile/navigationbar/Button.js","qx:qx/ui/mobile/navigationbar/BackButton.js","qx:qx/ui/mobile/container/MIScroll.js","qx:qx/ui/mobile/container/MNativeScroll.js","qx:qx/ui/mobile/container/Scroll.js","qx:qx/ui/decoration/Single.js","qx:qx/ui/decoration/Uniform.js","qx:qx/ui/mobile/list/IListDelegate.js","qx:qx/module/Environment.js","qx:qx/module/event/Mouse.js","qx:qx/ui/mobile/layout/Card.js","qx:qx/event/handler/Transition.js","qx:qx/ui/virtual/cell/Boolean.js","qx:qx/ui/progressive/headfoot/TableHeading.js","qx:qx/ui/core/MNativeOverflow.js","qx:qx/dev/unit/MMeasure.js","qx:qx/data/marshal/IMarshalerDelegate.js","qx:qx/data/store/IStoreDelegate.js","qx:qx/ui/embed/Flash.js","qx:qx/html/Flash.js","qx:qx/bom/Flash.js","qx:qx/ui/mobile/tabbar/TabBar.js","qx:qx/ui/mobile/tabbar/TabButton.js","qx:qx/ui/mobile/navigationbar/NavigationBar.js","qx:qx/module/util/String.js","qx:qx/dev/unit/MMock.js","qx:qx/ui/table/model/Remote.js","qx:qx/ui/indicator/ProgressBar.js","qx:qx/module/Transform.js","qx:qx/locale/String.js","qx:qx/ui/form/ToggleButton.js","qx:qx/ui/form/CheckBox.js","qx:qx/ui/embed/Html.js","qx:qx/module/Storage.js","qx:qx/data/controller/Form.js","qx:qx/data/controller/Object.js","qx:qx/ui/menubar/MenuBar.js","qx:qx/ui/progressive/renderer/table/Row.js","qx:qx/ui/progressive/renderer/table/cell/Default.js","qx:qx/ui/progressive/Progressive.js","qx:qx/bom/client/Runtime.js","qx:qx/io/request/authentication/IAuthentication.js","qx:qx/ui/mobile/container/Navigation.js","qx:qx/module/MatchMedia.js","qx:qx/bom/MediaQueryListener.js","qx:qx/ui/mobile/container/Drawer.js","qx:qx/bom/Cookie.js","qx:qx/module/Cookie.js","qx:qx/ui/window/Desktop.js","qx:qx/ui/mobile/container/MasterDetail.js","qx:qx/bom/media/Abstract.js","qx:qx/bom/media/Audio.js","qx:qx/ui/mobile/dialog/Manager.js","qx:qx/ui/mobile/dialog/BusyIndicator.js","qx:qx/util/fsm/State.js","qx:qx/util/fsm/FiniteStateMachine.js","qx:qx/util/fsm/Transition.js","qx:qx/ui/toolbar/CheckBox.js","qx:qx/ui/progressive/headfoot/Progress.js","qx:qx/module/event/Orientation.js","qx:qx/ui/table/cellrenderer/String.js","qx:qx/log/appender/RhinoFile.js","qx:qx/theme/Modern.js","qx:qx/ui/tree/selection/SelectionManager.js","qx:qx/ui/tree/core/AbstractTreeItem.js","qx:qx/ui/tree/Tree.js","qx:qx/ui/table/celleditor/ComboBox.js","qx:qx/xml/String.js","qx:qx/io/rest/Resource.js","qx:qx/bom/rest/Resource.js","qx:qx/bom/request/SimpleXhr.js","qx:qx/util/ExtendedColor.js","qx:qx/ui/form/Form.js","qx:qx/ui/mobile/form/Form.js","qx:qx/ui/mobile/form/Resetter.js","qx:qx/ui/virtual/cell/Html.js","qx:qx/util/StringBuilder.js","qx:qx/bom/PageVisibility.js","qx:qx/data/store/Yql.js","qx:qx/ui/table/cellrenderer/Image.js","qx:qx/data/controller/IControllerDelegate.js","qx:qx/bom/media/Video.js","qx:qx/application/Basic.js","qx:qx/module/Traversing.js","qx:qx/module/Manipulating.js","qx:qx/module/Placeholder.js","qx:qx/ui/container/Resizer.js","qx:qx/dev/unit/MRequirements.js","qx:qx/bom/request/IRequest.js","qx:qx/ui/progressive/renderer/table/cell/Boolean.js","qx:qx/ui/progressive/model/Default.js","qx:qx/ui/virtual/layer/HtmlCell.js","qx:qx/ui/virtual/core/IHtmlCellProvider.js","qx:qx/ui/progressive/renderer/table/cell/Html.js","qx:qx/util/Validate.js","qx:qx/theme/simple/Font.js","qx:qx/ui/toolbar/RadioButton.js","qx:qx/bom/Vml.js","qx:qx/ui/tree/TreeFolder.js","qx:qx/ui/layout/Dock.js","qx:qx/util/EditDistance.js","qx:qx/ui/table/cellrenderer/Number.js","qx:qx/ui/list/core/IListDelegate.js","qx:qx/ui/groupbox/RadioGroupBox.js","qx:qx/ui/table/cellrenderer/Dynamic.js","qx:qx/module/event/Native.js","qx:qx/module/event/TouchHandler.js","qx:qx/module/Template.js","qx:q.js","qx:qx/ui/groupbox/CheckGroupBox.js","qx:qx/dev/ObjectSummary.js","qx:qx/ui/form/TextArea.js","qx:qx/ui/virtual/layer/WidgetCellSpan.js","qx:qx/ui/tree/TreeFile.js","qx:qx/io/request/authentication/Basic.js","qx:qx/util/Base64.js","qx:qx/application/Native.js","qx:qx/ui/virtual/layer/HtmlCellSpan.js","qx:qx/ui/virtual/cell/Image.js","qx:qx/module/Blocker.js","qx:qx/io/ScriptLoader.js","qx:qx/ui/virtual/behavior/Prefetch.js","qx:qx/ui/table/cellrenderer/Date.js","qx:qx/ui/table/cellrenderer/Replace.js","qx:qx/dev/unit/TestLoader.js","qx:qx/ui/table/celleditor/Dynamic.js","qx:qx/dev/unit/TestLoaderNative.js","qx:qx/dev/Profile.js","qx:qx/ui/virtual/cell/String.js","qx:qx/ui/form/renderer/Double.js","qx:qx/ui/mobile/form/Group.js","qx:qx/io/remote/RpcError.js","qx:qx/theme/simple/Color.js","qx:qx/theme/Simple.js","qx:qx/module/Io.js","qx:qx/ui/form/VirtualComboBox.js","qx:qx/ui/form/DateField.js","qx:qx/ui/table/celleditor/CheckBox.js","qx:qx/ui/virtual/layer/Column.js","qx:qx/ui/treevirtual/MNode.js","qx:qx/dev/Tokenizer.js","qx:qx/ui/decoration/Background.js","qx:qx/ui/mobile/container/Carousel.js","qx:qx/ui/control/ColorPopup.js","qx:qx/ui/decoration/Double.js","qx:qx/log/appender/PhoneGap.js","qx:qx/ui/mobile/embed/Html.js","qx:qx/xml/Element.js","qx:qx/ui/table/cellrenderer/Boolean.js","qx:qx/dev/unit/TestLoaderBasic.js","qx:qx/ui/virtual/selection/ISelectionDelegate.js","qx:qx/ui/table/cellrenderer/Debug.js","qx:qx/module/Core.js","qx:qx/ui/table/cellrenderer/Password.js","qx:qx/bom/FileReader.js","qx:qx/ui/table/MTableContextMenu.js","qx:qx/ui/mobile/form/Title.js","qx:qx/module/Rest.js","qx:qx/data/controller/Tree.js","qx:qx/module/event/Keyboard.js","qx:qx/ui/progressive/renderer/FunctionCaller.js","qx:qx/bom/Window.js","qx:qx/bom/Blocker.js","qx:qx/ui/root/Inline.js","qx:qx/module/event/OrientationHandler.js","qx:qx/ui/mobile/page/Manager.js","qx:qx/ui/decoration/Beveled.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();



qx.$$loader.init();

