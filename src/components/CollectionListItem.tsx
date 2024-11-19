import { HomeIcon, ListIcon, Users2Icon } from "lucide-react";

export default function CollectionListItem() {
  return (
    <div className="w-full hover:bg-red-50 py-2">
      <div className="mx-8 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <HomeIcon absoluteStrokeWidth size={"16px"} />
          <span className="text-gray-800">Godot</span>
          <Users2Icon absoluteStrokeWidth size={"12px"} />
        </div>
        <span className="text-gray-600 text-sm">10</span>
      </div>
    </div>
  );
}
