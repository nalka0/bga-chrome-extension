// @flow
import { isMobile } from "is-mobile";

import type { TableId } from "../types/bga/Table";
import { setBadge } from "../utils/badge/setBadge";
import { sortTables, sortTournaments } from "../utils/init/sort";
import Configuration from "../config/configuration";

import { Error } from "./Error";
import { Loading } from "./Loading";
import { LoginButton } from "./LoginButton";
import { TablesView } from "./views/TablesView";
import { TournamentsView } from "./views/TournamentsView";
import { FriendsView } from "./views/FriendsView";
import { OptionsView } from "./views/OptionsView";

import { useState, useEffect, useErrorBoundary } from "preact/hooks";
import { updateBadgeAndIcon } from "../utils/updateBadgeAndIcon";
import { useFetch } from "./hooks/useFetch";
import { Tabs } from "./base/Tabs";
import { Tab } from "./base/Tab";
import { cn } from "./utils/cn";

async function handleAcceptOrDeclineInvite(tableId: TableId) {
	// TODO: https://github.com/FlavienBusseuil/bga-chrome-extension/projects/1
	// console.log(tableId);
}

type Props = {
	config: Configuration,
};

export function App({ config }: Props): React$Node {
	const [fetch, { error: fetchError, result }] = useFetch();
	const [childError, resetChildError] = useErrorBoundary();
	const [activeTab, setActiveTab] = useState < string > ("tables");
	const error = fetchError ?? childError;
	const motionSensitivityEnable = config.isMotionSensitivityEnable();

	useEffect(fetch, []);

	if (error) {
		setBadge({ color: "#dc2626", text: `x` });
		return (
			<Error
				errorMessage={chrome.i18n.getMessage("something_wrong")}
				errorDetails={error.message ?? error}
			/>
		);
	}

	if (result === null) {
		return <Loading />;
	}

	if (result.isLoggedOut) {
		setBadge({ color: "#757575", text: `-` });
		return <LoginButton />;
	}

	const {
		nbWaitingTables,
		nbPendingInvites,
		transformedTables,
		transformedTournaments,
		getGroupTables,
		groups,
	} = result;

	const sortedTables = sortTables(transformedTables);
	updateBadgeAndIcon({
		nbWaitingTables,
		nbPendingInvites,
		tracking: config.isTrackingEnable(),
		soundNotification: config.isTrackingEnable() && config.isSoundNotificationEnable()
	});

	const sortedTournaments = sortTournaments(transformedTournaments);

	const configChange = () => {
		if (config.isTrackingEnable()) {
			fetch();
		} else {
			updateBadgeAndIcon({ nbPendingInvites: 0, nbWaitingTables: 0, tracking: false, soundNotification: false });
		}
	};

	const getContent = () => {
		if (activeTab === "options") {
			return <OptionsView config={config} onChange={configChange} />;
		}

		if (isMobile()) {
			if (activeTab === "tables") {
				return <TablesView
					className="w-full"
					tables={sortedTables}
					onAcceptInvite={handleAcceptOrDeclineInvite}
					onDeclineInvite={handleAcceptOrDeclineInvite}
					motionSensitivityEnable={motionSensitivityEnable}
				/>;
			}
			if (activeTab === "tournaments") {
				return <TournamentsView className="w-full" tournaments={sortedTournaments} />;
			}
			return <FriendsView className="w-full" getGroupTables={getGroupTables} groups={groups} motionSensitivityEnable={motionSensitivityEnable} />;
		}

		return (
			<div
				className={cn([
					"relative flex w-[300%] transition-all gap-0.5",
					activeTab === "tables" ? "left-[100%]" : activeTab === "tournaments" ? "left-[0%]" : "-left-[100%]",
				])}
			>
				<TablesView
					className={cn([
						"w-full",
						"transition-all",
						activeTab !== "tables" && "opacity-0",
						activeTab !== "tables" && "invisible",
					])}
					tables={sortedTables}
					onAcceptInvite={handleAcceptOrDeclineInvite}
					onDeclineInvite={handleAcceptOrDeclineInvite}
					motionSensitivityEnable={motionSensitivityEnable}
				/>
				<TournamentsView
					className={cn([
						"w-full",
						"transition-all",
						activeTab !== "tournaments" && "opacity-0",
						activeTab !== "tournaments" && "invisible",
					])}
					tournaments={sortedTournaments}
				/>
				<FriendsView
					className={cn([
						"w-full",
						"transition-all",
						activeTab !== "friends" && "opacity-0",
						activeTab !== "friends" && "invisible",
					])}
					getGroupTables={getGroupTables}
					groups={groups}
					motionSensitivityEnable={motionSensitivityEnable}
				/>
			</div>
		);
	}

	return (
		<>
			<Tabs className="mb-1">
				<Tab
					k="tables"
					fullWidth={true}
					isActive={activeTab === "tables"}
					onClick={(k) => setActiveTab(k)}
				>
					<span className="mr-1">🎲</span>
					{chrome.i18n.getMessage("tables")} ({sortedTables.length})
				</Tab>
				<Tab
					k="tournaments"
					fullWidth={true}
					isActive={activeTab === "tournaments"}
					onClick={(k) => setActiveTab(k)}
				>
					<span className="mr-1">🏆</span>
					{chrome.i18n.getMessage("tournaments")} (
					{sortedTournaments.length})
				</Tab>
				<Tab
					k="friends"
					fullWidth={true}
					isActive={activeTab === "friends"}
					onClick={(k) => setActiveTab(k)}
				>
					<span className="mr-1">🙋</span>
					{chrome.i18n.getMessage("friends")}
				</Tab>
				<Tab
					k="options"
					fullWidth={isMobile()}
					isActive={activeTab === "options"}
					onClick={(k) => setActiveTab(k)}
				>
					<span className="mr-1">⚙</span>
					{chrome.i18n.getMessage("options")}
				</Tab>
			</Tabs>

			{getContent()}
		</>
	);
}
